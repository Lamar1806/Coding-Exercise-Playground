/***********************
 * Date: 6-32pm
 * Author: Dalmar Brooks
 * Purpose: Display certain input fields based on User Authority attribute.
 * Problem Solved: multiple js files for 1 form.
 * Idea: Make a react like solution with JQuery.
 * */ 

// Improvements:
// Authority should be its own Object so its properties can be modified and encapsulated
// Currently all class attributes are public and need to be set to private. (very convoluted to do in es6)

class Form{

    /**     
     * @param {string} formId used to set the form element's  id attribute
     * @param {string} className sets the forms className attribute.
     * @param {string} parentElementId defines the forms parent element Id
     * @param {string} userAthority defines the authority of the user
     */
    constructor(formId,className,parentElementId,userAthority){
        this.parentElement = $('#' + parentElementId);
        this.formId = formId;
        this.className = className;
        this.userAthority = userAthority;
        this.inputs = [];
        this.action = '/';
        this.header = ''

        this.displayForm(className);
        this.form = $('#' + this.formId);
   
    }

    setAction = (url)=>{
        this.action = url;
        this.form.attr('action', url);
    }

    setHeader = (header)=>{
        this.header = header;
        this.form.append(`<h1>${header}</h1>`)
    }

    addInput = (input)=>{        
        if(input.hasOwnProperty('authority') && this.userAthority !== input.authority){
            return;
        }        
        this.form.append(input.html)               
    }

    displayForm = ()=>{              
        console.log(this.formId)
        this.parentElement.append(`
            <form class='form-horizontal ${this.className}' action=${this.action} id='${this.formId}'> 
                ${this.header}
            </form>
        `)
    }

    empty = ()=>{
        console.log('remove');
        $('#'+this.formId).empty();
    }

    getForm = ()=>{
        return this.form;
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submited');
    }
}//End Form Class

let userObjArray = [
    {
        authority: 'admin',
        name: 'Brian Dunne'
    },
    {
        authority: 'normal',
        name: 'Brian Dunne'
    },
    {
        authority: '',
        name: 'Brian Dunne'
    },
]

// Es6 self Ivoking function
{
    let formInputs = [
        {
            authority: 'admin',
            html: `
            <div class="form-group">
                <label for="userId" class="mylabel">UserId: </label> 
                <input type='text' class='input' name='userId' placeholder='0591' value='0591' autofocus required/>
            </div>
            `,
        },
        {
            authority: 'admin',
            html: `
            <div class="form-group">
                <label for="userId" class="mylabel">Name: </label> 
                <input type='text' class='input' name='userId' placeholder='lamar' required/>
            </div>
            `,
        },
        {
            authority: 'admin',
            html: `
            <div class="form-group">
                <label for="userId" class="mylabel">Address: </label> 
                <input type='text' class='input' name='userId' placeholder='lamar' required/>
            </div>
            `,
        },
        {
            html: `
                          
                <input type='submit' class='input' name='userId' value='Save' />
            
            `,
        },        
    ]

    $(document).ready(function(){
        let MyForm = new Form('myForm1','myForm1','body',userObjArray[0].authority);
        MyForm.setHeader('Edit User Info');
        formInputs.forEach(x => MyForm.addInput(x));

        $('#'+MyForm.formId).submit(MyForm.handleSubmit);


    })
}


