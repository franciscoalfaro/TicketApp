
export const getUltimos = async()=>{

    const resp = await fetch('https://franalfaro.ddns.net/serverTicket/ultimos')
 

    const data = await resp.json()
    
    return data.ultimos
}