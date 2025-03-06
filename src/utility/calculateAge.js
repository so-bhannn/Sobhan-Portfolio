const calculateAge = ()=>{
    let today= new Date();
    let birthdate= new Date("12/17/2003");
    let Time_diff= today.getTime() - birthdate.getTime();

    let AgeInDays = Math.round(Time_diff/(1000*3600*24))

    var ones=['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var tens=['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var teens= ['ten', 'eleven', 'tweleve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    function convert_thousand(num){
        if(num>=1000){
            return convert_hundered(Math.floor(num/1000))+" thousand "+convert_hundered(num%1000)
        }
        else{
            return convert_hundered(num)
        }
    }

    function convert_hundered(num){
        if(num>=100){
            return ones[Math.floor(num/100)]+" hundered "+ convert_tens(num%100)
        }
        else{
            return convert_tens(num)
        }
    }

    function convert_tens(num){
        if(num<10) return ones[num]
        else if(num>=20){
            return tens[Math.floor(num/10)] + " " + ones[num%10]
        }
        else{
            return teens[num-10]
        }
    }

    function main(num){
        if(num==0) return "zero"
        else return convert_thousand(num)
    }

    return main(AgeInDays)
}

export default calculateAge