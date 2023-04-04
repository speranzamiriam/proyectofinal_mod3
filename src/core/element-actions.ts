import { driverInstance } from "./driver";

export class ElementActions {

    static async click(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }

  
    

    static async setText(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.type(locator, text);
    }
    static async ClickText(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
    

    static async setCombo(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        //await driverInstance.Page.click(locator);
        await  driverInstance.Page.locator(locator).selectOption({ label: text })
        //await driverInstance.Page.click(text);
    }

    static async isElementVisible(locator: string): Promise<boolean> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }
    static async isElementVisibleExistent(locator: string): Promise<boolean> {        
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }

    static async getElementText(locator: string): Promise<string> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.innerText(locator);
    }
    static async getValueElement(locator: string): Promise<string> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.locator(locator).inputValue();
    }
    static async getCountElement(locator: string): Promise<number> {
        let contador =0;
        await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
        contador= await driverInstance.Page.locator(locator).count();
        return contador;
    }
    

    static async pausar(): Promise<void> {
        await driverInstance.Page.waitForTimeout(10000);
    }

   
 
    
}
