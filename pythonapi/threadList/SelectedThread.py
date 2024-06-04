import os
import re
import time

from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

from urllib.parse import urlparse

"""
class Pathologie {
   name : String
   cause : String 
   symptoms : String
   treatment : String
   nbrSearch : int
}
"""

def extract_text_without_tags(html_content):
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    # Get the text content without HTML tags
    text = soup.get_text(separator=' ')
    return text.strip()



def get_selected_thread(th_url = "https://www.carenity.com/infos-maladie/asthme-88"):
    topic = 1
    options = Options()
    options.add_experimental_option("detach",True)

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()),
                              options=options)


    page_url = th_url
    driver.get(page_url)


    button_agree = driver.find_element(by=By.ID
                                               , value="didomi-notice-agree-button")
    button_agree.click()
    time.sleep(12)   #to not get blocked
    Text_pathologie = driver.find_elements("xpath", 
                                           f"//section[contains(@id,'article')]//div[contains(@class,'text')]")

    html_text = []        
    if Text_pathologie is not None:
        for paragraph in Text_pathologie:
            html_text.append(paragraph.get_attribute("innerHTML"))

    combined_html_text = ' '.join(html_text)
    return combined_html_text

    
    



def func2(url):
    html_text = get_selected_thread(url)
    extracted_text = extract_text_without_tags(html_text)
    return {"text":extracted_text}



