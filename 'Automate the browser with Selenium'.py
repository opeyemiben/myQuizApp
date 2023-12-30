'Automate the browser with Selenium'
from selenium import webdriver
from selenium.webdriver.common.keys import keys
import time

driver = webdriver.Chrome(
    'C:\Users\BEN\AppData\Local\Google\Chrome\Application\chrome.exe')
driver.get('https://1xbet.ng/en')
driver.maximize_window()
time.sleep(2)
login_btn = driver.find_element_by_id('curLoginForm')
login_btn.click()
time.sleep(1)
login_btn = driver.find_element_by_id('')

# Click the login dropdown
driver.find_element_by_id("curLoginForm").click()

# Fill in the login form and submit it
driver.find_element_by_id("auth_id_email").send_keys('your_username')
driver.find_element_by_id("auth-form-password").send_keys('your_password')
driver.find_element_by_class_name("auth__login-button").click()
