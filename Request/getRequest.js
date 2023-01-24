export const getRequest=async(token,url)=>{
    const headers = { "Authorization": `Bearer ${token}` };
    const response = await fetch(url, { headers });
    const final=await response.json();
  
    return final;

}