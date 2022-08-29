import axios from "axios"

const auth="razak:mohamed"
const token=btoa(auth)

export const onSubmitShortList=async(object)=>{
    try{
        if(object.price!=0&&object.size==0.0&&object.brand==""&&object.type==""){
            const t = await axios.get(`/api/byprice/${object.price}`,{
                headers:{
                    "Authorization":`Basic ${token}`
                }
            })
            return t
        }
        else if(object.price==0&&object.size!=0.0&&object.brand!=""&&object.type==""){
            const t = await axios.get(`/api/bytwo/${object.brand}/${object.size}`,{
                headers:{
                    "Authorization":`Basic ${token}`
                }
            })
            return t
        }
        else if(object.price==0&&object.size==0.0&&object.brand==""&&object.type!=""){
            const t = await axios.get(`/api/bywhat/${object.type}`,{
                headers:{
                    "Authorization":`Basic ${token}`
                }
            })
            return t
        }
        else{
            return {"err":"Invalid filter call"}
        }
    }
    catch(err){alert(err)}
}

export const onSubmitDelete=async(ref)=>{
    try{
        const t = await axios.delete(`/api/delid/${ref}`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitUpdate=async(object)=>{
    try{
        const t = await axios.put(`/api/up`,object,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitRead=async(id)=>{
    try{
        const t = await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitList=async()=>{
    try{
        const t = await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t;
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitCreate=async(object)=>{
    try{
        const t = await axios.post(`/api/new`,object,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}