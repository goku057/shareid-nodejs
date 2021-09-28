from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time

options = Options()
options.headless = False
driver = webdriver.Chrome(ChromeDriverManager().install(), options = options)

driver.get("http://localhost:3000/account-info")
# createButton = driver.find_element_by_xpath('//*[@id="create-post-header"]/span/a/button')
# createButton.click()
# time.sleep(5)
inputOne=driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/form/div[1]/div[1]/input')
inputTwo=driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/form/div[1]/div[2]/input')
inputThree=driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/form/div[1]/div[3]/input')
inputFour=driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/form/div[1]/div[4]/input')
postButton = driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/form/div[2]/button')
inputOne.send_keys("Azizul Hakim")
time.sleep(0.25)
inputTwo.send_keys("Nabid")
time.sleep(0.25)
inputThree.send_keys("12")
time.sleep(0.25)
inputThree.send_keys("07")
time.sleep(0.25)
inputThree.send_keys("1996")
time.sleep(0.25)
inputFour.send_keys("0111111111")
time.sleep(0.25)
postButton.click()