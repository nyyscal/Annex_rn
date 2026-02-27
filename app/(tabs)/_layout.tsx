import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useAuth } from '@clerk/clerk-expo'

const TabsLayout = () => {
  const {isSignedIn, isLoaded} = useAuth()

  if(!isLoaded) return null //better UX
  if(!isSignedIn) return <Redirect href={'/(auth)'} />

  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:"#FFD700",
      tabBarInactiveTintColor:"#f0e7e7ea",
        tabBarStyle: { 
          backgroundColor: "#000", // black tab bar
          paddingTop:5,
          paddingBottom:5,
          height:70,
          borderColor:"#000"
          // borderTopWidth:4, // remove top border
        },
    }}>
      <Tabs.Screen name='index' options={{
        title:"Home", 
        tabBarIcon:({color,size})=>{
          return <Ionicons name="home-outline" size={size} color={color} />
        }
        }}/>
      <Tabs.Screen name='booking' options={{
        title:"Bookings", 
        tabBarIcon:({color,size})=>{
          return <Ionicons name="calendar-outline" size={size} color={color} />
        }
        }}/>
      <Tabs.Screen name='notifications' options={{
        title:"Notifications", 
        tabBarIcon:({color,size})=>{
          return <Ionicons name="notifications-outline" size={size} color={color} />
        }
        }}/>
      <Tabs.Screen name='profile' options={{
        title:"Profile", 
        tabBarIcon:({color,size})=>{
          return <Ionicons name="person-outline" size={size} color={color} />
        }
        }}/>
      
    </Tabs>
  )
}

export default TabsLayout