import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    
    private colorDropdown: string = "//button[@class='color_dropdown_toggle form_field_control']"; 
    // Extra Points add select the following behavior
    //private colorDropdown: string = '';
    private favoritesToggle: string = '//input[name="is_favorite]"';
    private titutoFavoritesToggle: string = `//div[normalize-space()="Add to favorites"]`; ;
    
    private optionListView: string = '';
    private optionBoardView: string = '';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }
    async ClickDropdownSelectColor(projectColor: string) {     
        projectColor = `//span[normalize-space()='${projectColor}']`;
        //await ElementActions.setColor(this.colorDropdown, projectColor);   
    } 
    async ClickToggleOption(blnOpcion: string){          
        if(blnOpcion=="True"){
          await ElementActions.ClickText(this.titutoFavoritesToggle);
        }
        
        
    }
    
    async ClickTextOption(textNameOption: string){        
        textNameOption = `//div[normalize-space()="${textNameOption}"]`;  
        console.log(textNameOption);
        await ElementActions.ClickText(textNameOption);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }
}

export const addProjectPane = new AddProject();