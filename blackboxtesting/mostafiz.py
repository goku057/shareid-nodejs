from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time

options = Options()
options.headless = False
driver = webdriver.Chrome(ChromeDriverManager().install(), options = options)

driver.get("http://localhost:3000/latest-posts")
createButton = driver.find_element_by_xpath('//*[@id="create-post-header"]/span/a/button')
createButton.click()
time.sleep(5)
inputOne=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[1]/div/input')
inputTwo=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[3]/div/input')
inputThree=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[4]/div/input')
inputFour=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[5]/div/input')
inputFive=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[6]/textarea')
inputSix=driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/div[7]/div/input')
postButton = driver.find_element_by_xpath('//*[@id="custom_create-post-row"]/div[2]/form/button')
inputOne.send_keys("Freefire")
inputTwo.send_keys("1000")
inputThree.send_keys("abc")
inputFour.send_keys("abc")
inputFive.send_keys("jsaedgfyhsudjf")
inputSix.send_keys("jhshj jhasdga sjhdvjhas")
postButton.click()