import { useSSO } from "@clerk/clerk-expo"
import { useState } from "react"
import { Alert } from "react-native"

function useSocialAuth() {
  const [isLoading,setIsLoading] = useState<string | null>(null)
  const {startSSOFlow} = useSSO()

  const handleSocialAuth = async(strategy:"oauth_google")=>{
    setIsLoading(strategy)
    try {
      const {createdSessionId, setActive} = await startSSOFlow({strategy})
      if(createdSessionId && setActive){
        await setActive({session:createdSessionId})
      }
    } catch (error) {
      console.log("Error in SSO:",error)
      Alert.alert("Authentication Error",`Failed to authenticate with ${strategy.replace("oauth_","")}. Please try again.`)
    }finally{
      setIsLoading(null)
    }
  }
 return {isLoading, handleSocialAuth}
}

export default useSocialAuth