from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time

options = Options()
options.headless = False
driver = webdriver.Chrome(ChromeDriverManager().install(), options = options)

driver.get("http://localhost:3000/")
searchInput = driver.find_element_by_xpath('//*[@id="searchForm"]/input')
searchButton = driver.find_element_by_xpath('//*[@id="searchForm"]/i')
key = input("Enter your value: ")
searchInput.send_keys(key)
searchButton.click()
time.sleep(3)
print('Title: ', driver.find_element_by_xpath('//*[@id="post-card"]/div[1]/div[1]').text)
title= driver.find_element_by_xpath('//*[@id="post-card"]/div[1]/div[1]').text
if(title==key):
  print("Black box testing successfull")
else:
  print("Black box testing unsuccessfull")

