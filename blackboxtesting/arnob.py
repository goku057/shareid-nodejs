from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time

options = Options()
options.headless = False
driver = webdriver.Chrome(ChromeDriverManager().install(), options = options)

driver.get("http://localhost:3000/")
# print(driver.title)
dropdown = driver.find_element_by_xpath('//*[@id="main-nav"]/div/div[2]')
paymentElement = driver.find_element_by_id('payform')

dropdown.click()
time.sleep(1)
paymentElement.click()
paymentFormInput = driver.find_element_by_id('pay-inp')
paymentFormInput.send_keys("5700" + Keys.RETURN)

# paymentFormBtn = driver.find_element_by_id('//*[@id="home-container"]/div[4]/div/div[2]/table/tbody/tr[2]/td[2]/form/button')
payWithCardBtn = driver.find_element_by_xpath('//*[@id="home-container"]/div[4]/div/div[2]/table/tbody/tr[2]/td[3]/form/button')
payWithCardBtn.click()
time.sleep(3)
# Hooks.driver.switchTo().frame(Hooks.driver.findElement(By.xpath("xpathOfIframe")));
driver.switch_to.frame('stripe_checkout_app')
cardNum = driver.find_element_by_xpath('//*[@id="card_number"]')
cardExp = driver.find_element_by_xpath('//*[@id="cc-exp"]')
cardCVC = driver.find_element_by_xpath('//*[@id="cc-csc"]')
time.sleep(1)
cardNum.send_keys("4242")
time.sleep(0.25)
cardNum.send_keys("4242")
time.sleep(0.25)
cardNum.send_keys("4242")
time.sleep(0.25)
cardNum.send_keys("4242")
time.sleep(0.25)
cardExp.send_keys("12")
time.sleep(0.25)
cardExp.send_keys("31")
time.sleep(0.25)
cardCVC.send_keys("123" + Keys.RETURN)



