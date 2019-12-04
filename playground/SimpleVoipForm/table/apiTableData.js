/***********************
 * Date: 6-32pm
 * Author: Dalmar Brooks
 * Purpose: Display data in a table based on user Auth attribute.
 * */ 


/**
 * Creates a table from an obect using its keys as the <th> and values for the <td>
 */

class Table {
    /**
     * 
     * @param {object} options set parentContainer
     * , ClassName, Id, datastructure
     */
    constructor(options){
        this.id = options.id;
        this.parentContainer = options.parentContainer;

        this.headers = Object.keys(options.dataStructure);
        this.data = Object.values(options.dataStructure);
        this.extraData();
        this.createTable();
        this.renderHeaders();
        this.renderObjectData();
    }

    extraData = ()=>{
        let aditionalData = [
            {
                title: "user1", 
                first: "user1name", 
                last: "user3221"
            },      
            {
                title: "user1", 
                first: "user1name", 
                last: "user3221"
            },       
            {
                title: "user1", 
                first: "user1name", 
                last: "user3221"
            },      
            {
                title: "user1", 
                first: "user1name", 
                last: "user3221"
            },      
            {
                title: "user1", 
                first: "user1name", 
                last: "user3221"
            },         
        ]
        
        aditionalData.forEach((x)=> {
            Object.values(x).forEach((y)=>this.data.push(y))
        })
        
    }

    createTable = ()=>{
        let table = `
        <table id=${this.id} class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                </tr>
            </thead>
            <tbody> 
            </tbody>
        </table>        
        `;

        $('#body').append(table);        
    }

    renderHeaders = ()=>{
        let headers = this.headers.map((x)=>{
            return `<th scope="col">${x}</th>`
        })
        
        $(`#${this.id} > thead > tr`).append(`${headers}`)
    }

    renderObjectData = ()=>{
        let count = 0;
        let rowNum = 1;

        let data = this.data.map((x,index)=>{
            let html = ``;
            let td = `<td>${x}</td>`

            if(index == 0){
                html += `<tr>`
                html += `<th scope="row">${rowNum}</th>`                
            }
            
            if(count == this.headers.length){
                rowNum ++;
                html += `</tr>`
                html += `<tr>`
                html += `<th scope="row">${rowNum}</th>`
                count = 0;
            }

            html += td

            count = count + 1;
            return html;
        })

        $(`#${this.id} > tbody`).append(`${data}`)
    }

}


{
    $(document).ready(function(){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {               
                console.log(data.results[0].name);
        
                let MyTable = new Table({
                    id: 'mytable',
                    class: 'table',
                    parentContainer: 'body',
                    dataStructure: data.results[0].name,
                });
            },
            error: function(e){
                console.log(e)
            }
    });
       
    })
}