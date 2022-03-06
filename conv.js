$(document).ready(function () {
    requestToken()
  });
  let token
  let tab = {}
  function requestToken() {
    $.ajax({
      async: true,
      crossDomain: true,
      url: "https://cors-anywhere.herokuapp.com/http://api.exchangeratesapi.io/v1/latest?access_key=de9c4c0bad8ce0708badffa2be14e1c2", //pass your tenant
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      success: function (response) {
        //console.log(response);
        let sel = $('select')
        for(let key in response.rates)
        {
                       
          tab[key] = response.rates[key]
          sel.prepend(`<option value="${key}">${key}</option`)
        }
        let curr1 = $("#from option:selected").val()
        let curr2  = $("#to option:selected").val()
        $('#from').change(()=>{
          curr1 = $("#from option:selected").val()
        })
        $('#to').change(()=>{
          curr2 = $("#to option:selected").val()
        })
        //console.log(curr1)
        $('form').on('submit',(e)=>{
            e.preventDefault()
            let val = parseFloat($('#curr_val').val())
            console.log(val)
            val = val.toFixed(2)
            let newVal = (val * parseFloat(tab[curr2]))/parseFloat(tab[curr1])
            $('#exchanged').text(`${val} ${curr1} to ${newVal.toFixed(2)} ${curr2}`)

          })
        //console.log(tab)
        token = response.access_token;
        //console.log(response.rates.PLN)
      },
      error: function (error) {
        console.log(JSON.stringify(error));
      },
    });
  }
  
  
  
