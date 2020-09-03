import requests
from bs4 import BeautifulSoup
URL = "https://hasjob.co/?q=remote"
r = requests.get(URL)
element = {
    'locations': [],
    'dates': [],
    'positions': [],
}


soup = BeautifulSoup(r.content, 'html5lib')
parsed = soup.find_all('a', attrs={'class': 'stickie'})
for tag in parsed:
    element['locations'].append(tag.find_all('span')[0].text)
    element['dates'].append(tag.find_all('span')[1].text)
    element['positions'].append(tag.find_all('span')[2].text)

print(element)
