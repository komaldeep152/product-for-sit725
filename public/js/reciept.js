//Creating a function for taking in contents and sending them to the generated reciept...
let printReciept = () => {
    //Grabbing components of the form...
    let sname = document.querySelector("#sname").value;
    let rname = document.querySelector("#rname").value;
    let saddr = document.querySelector("#saddr").value;
    let raddr = document.querySelector("#raddr").value;
    let ptype = document.querySelector("#ptype").value;
    let pcost = document.querySelector("#pcost").value;
    let ETA = document.querySelector("#ETA").value;
    let pdes = document.querySelector("#pdes").value;

    let reciept = '<hr><div class="container" style=" padding:30px; background-color: darkslateblue; color:#EC8F21; text-transform: uppercase;">'+
    '<h3> YOUR PARCEL RECIEPT</h3>'+
    '<blockquote style="padding:5px; text-align: left;">'+
    '<label>Sender Name: </label> <span>'+ sname +'</span><br>'+
    '<label>Recipient Name: </label> <span>'+ rname +'</span><br>'+
    '<label>House Address: </label> <span>'+ saddr +'</span><br>'+
    '<label>Recipient Address: </label> <span>'+ raddr +' </span><br>'+
    '<label>Parcel Type: </label> <span>'+ ptype +'</span><br>'+
    '<label>Parcel Cost: </label> <span>'+ pcost +'</span><br>'+
    '<label>Parcel Description: </label> <span>'+ ETA +'</span><br>'+
    '<label>Expected Time of Arrival: </label> <span>'+ pdes +'</span><br>'+
    '</blockquote><hr><small>Note: Please print this form and provide this to your nearest Post Office.</small></div>';

    $('#parcel_reciept').append(reciept);
}

$("#print_reciept_btn").click(() => {
    //Create the contents of the reciept...
    printReciept();
});
