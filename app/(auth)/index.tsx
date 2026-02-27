import { View, Text, Image, TouchableOpacity, ImageSourcePropType, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

import bgImage from '@/assets/images/login.jpg';
import google from '@/assets/images/google.png';

import useSocialAuth from '@/hooks/useSocialAuth';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {isLoading: isSocialLoading, handleSocialAuth} = useSocialAuth()

  return (
    <View className="flex-1 relative">
      <Image source={bgImage} className="w-full h-full absolute" resizeMode="cover" />

      <View className="absolute inset-0 bg-black opacity-20" />

      {/* Google login button */}
      <View className="flex-1 justify-end items-center pb-12">
        <TouchableOpacity
          className="flex-row items-center bg-white w-[85%] py-3 rounded-full justify-center"
          onPress={() => handleSocialAuth("oauth_google")}
          disabled={isSocialLoading} 
        >
          {isSocialLoading ? (
            <ActivityIndicator size="small" color="black" className="mr-2 w-10 h-8" />
          ) : (
            <Image
              source={google as ImageSourcePropType}
              className="w-10 h-8 mr-2"
              resizeMode="contain"
            />
          )}
          <Text className="text-black text-lg font-semibold">
            {isLoading ? 'Signing in...' : 'Sign in with Google'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthPage;