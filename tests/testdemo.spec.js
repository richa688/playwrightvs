const {test,expect}=require('@playwright/test');

test("Login fun",async({page}) =>{

   await page.goto('https://www.automationexercise.com/login');

   await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[2]','anuj@gmail.com')

   await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[3]','richa@123')

   await page.click('//*[@id="form"]/div/div/div[1]/div/form/button');

    
});





