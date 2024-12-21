import requests
import  re
from PIL import Image

big_img_re=re.compile('background-image: url(.*?);',re.S|re.I)

pos_re = re.compile("class='gt_cut_fullbg_slice' style='background-position:(.*?)px (.*?)px;'></div>", re.S | re.I)



def save_img(url):
    img=requests.get(url).content
    with open('img.png','wb') as f:
        f.write(img)
    print('Image saved.')

def get_img():
    url = "https://authcode.51.com/authcode/slidecode"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"}

    html=requests.get(url,headers=headers)



    imgs=big_img_re.findall(html.text)


    if imgs:
        big_img='https:'+imgs[0].replace('("','').replace('")','')
        print('Big image url:',big_img)
    else:
        print("No big image found.")

    save_img(big_img)

    #获取坐标xy
    position=pos_re.findall(html.text)
    position=[[abs(int(pos[0].replace(' ',''))),
                abs(int(pos[1].replace(' ','')))]
                for pos in position]
    print(position,len(position))

    my_img=Image.open('./img.png')
    crop_list=[]

    for p in position:

        if p[1]==0:
            crop_list.append(my_img.crop((p[0],0,p[0]+13,25)))
        if p[1]==25:
            crop_list.append(my_img.crop((p[0],25,p[0]+13,50)))
        if p[1]==50:
            crop_list.append(my_img.crop((p[0],50,p[0]+13,75)))
        if p[1]==75:
            crop_list.append(my_img.crop((p[0],75,p[0]+13,100)))

    new_img=Image.new('RGB',(260,100))
    x_offset=0
    y_offset=0

    for crop in crop_list:
        if x_offset==260:
            x_offset=0
            y_offset+=25
        new_img.paste(crop,(x_offset,y_offset))
        x_offset+=13

    new_img.save('./new_img.png')


if __name__ == '__main__':
    get_img()


