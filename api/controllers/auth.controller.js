import bcrypt from "bcrypt"

export const register = async (req,res) =>{
    const {username,email,password}=req.body;

    //Hash Password

    const hashedPassword = await bcrypt.hash(password,10);
    //create a new user and save to db
    
}
export const login = (req,res) =>{

}
export const logout = (req,res) =>{

}
