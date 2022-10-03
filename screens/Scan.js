import React, { useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LogBox
} from 'react-native'
// import RNCamera from react-native-camera
import { RNCamera } from 'react-native-camera'
import { COLORS, SIZES, FONTS, icons, images} from '../constants'


const Scan = ({navigation}) => {
//  useEffect Hook to avoid the warnings 
  useEffect(() => {
    LogBox.ignoreLogs = ['Warning: ViewPropTypes will be removed from React Native']
    LogBox.ignoreAllLogs()
  },[])
 
  // ********************************************************************************************
  // function that renderHeader into our app 

  function renderHeader() {
    return (
      // View that hold eveything 
      <View style={{
        // flexDirection: row 
        flexDirection: 'row',
        // padding: 30 
        padding: SIZES.padding * 3,
        // justifyContent: 'space-between',
        justifyContent: 'space-between'
      }}>
        {/* wrap close image into the TouchableOpacity to make it touchable  */}
        <TouchableOpacity
          style={{
            // marginVertical is 2 
           marginVertical: SIZES.padding * 2
          }}
          // onPress go back to home page 
          onPress={() => navigation.goBack()}
        >
          <Image
            // source is icons.close
            source={icons.close}
            // resizeMode is contain
            resizeMode='contain'
            style={{
              // width and height is 20 
              width: 20,
              height: 20,
              // tintColor is white
              tintColor: COLORS.white
            }}
          />
        </TouchableOpacity>
        {/* View that display the text  */}
        <View style={{
          // marginVertical is 20 
           marginVertical: SIZES.padding * 2
        }}>
          {/* Scan for payment  with style is color is white and font.body3  */}
          <Text style={{color: COLORS.white, ...FONTS.body3}}>Scan for payment</Text>
        </View>
        {/* TouchableOpacity to make it touchable  */}
        <TouchableOpacity
          style={{
          //  marginVertical is 15 
            marginVertical: SIZES.padding * 1.5,
            // height and width is 40 
            height: 40,
            width: 40,
            // backgroundColor is green 
            backgroundColor: COLORS.green,
            // alignSelf is center 
            alignSelf: "center",
            // borderradius is 10 
            borderRadius: 10,
            // justifyContent and alignItems center to centerlize it 
            justifyContent: 'center',
            alignItems: 'center',
           
          }}
          // onPress display the info button click 
          onPress={() => console.log("info button clicked")}
        >
          <Image
            // source is icons,info 
            source={icons.info}
            // resizeMode is contain
            resizeMode='contain'
            style={{
              // width and height is 25 
              width: 25,
              height: 25,
              // tintColor is white 
              tintColor: COLORS.white
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  
  // ************************************************************************************************
  // function that display the renderPaymentMethod

  function renderPaymentMethod() { 
    return (
      // View that display the renderPaymentMethod 
      <View
        style={{
          // style is absolute 
          position: 'absolute',
          // from bottom, left, right its 0 
          bottom: 0,
          left: 0,
          right: 0,
          // height is 220 
          height: 220,
          // backgroundColor is white 
          backgroundColor: COLORS.white,
          // borderTopLeftRadius is 30
          borderTopLeftRadius: SIZES.radius,
          // borderTopRightRadius is 30
          borderTopRightRadius: SIZES.radius,
          // padding is 30 
          padding: SIZES.padding * 3
        }}
      >
        {/* View that display the text  */}
        <View style={{
          // justifyContent & alignItems is center 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Another payment method text with style font h4  */}
          <Text style={{...FONTS.h4}}>Another payment methods</Text>
        </View>
        
        {/* view that display the phone number and barcode image and text  */}
        <View style={{
          // flexDirection: row 
          flexDirection: 'row',
          // marginVertical is 20 
          marginVertical: SIZES.padding * 2
        }}>
    
          {/* wrap eveything into touchableOpacity to make it touchable  */}
            <TouchableOpacity
            style={{
                // flexDirection is row 
              flexDirection: 'row',
              // alignItem center 
                alignItems: 'center',

            }}
            // onPress display the Phone Number on console 
               onPress={()=> console.log('Phone number')}

            >
              <View
              style={{
                // width and height is 40 
                width: 40,
                height: 40,
                // backgroundColor is lightpurple
                backgroundColor: COLORS.lightpurple,
                // borderRadius is 8 
                borderRadius: SIZES.base,
                // justifyContent and alignItems is center to centerlize it 
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >

              <Image
                // source is phone 
                source={icons.phone}
                // resizeMode is contain
                resizeMode='contain'
                style={{
                  // width and height is 20
                  width: 20,
                  height: 20,
                  // tintColor is purple
                  tintColor: COLORS.purple
                }}
                />
                </View>
                  {/* phone number text with style font body3 and marginLeft is 8 */}
              <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>Phone number</Text>
             </TouchableOpacity>
          
          {/* wrap eveything into touchableOpacity to make it touchable  */}
          <TouchableOpacity
            style={{
                // flexDirection is row 
              flexDirection: 'row',
              // alignItem center 
              alignItems: 'center',
                // marginLeft is 30 
                marginLeft: SIZES.padding * 3

            }}
            // onPress display the barcode on a console 
               onPress={()=> console.log('barcode')}

            >
              <View
              style={{
                // width and height is 40 
                width: 40,
                height: 40,
                // backgroundColor is lightpurple
                backgroundColor: COLORS.lightGreen,
                // borderRadius is 8 
                borderRadius: SIZES.base,
                // justifyContent and alignItems is center to centerlize it 
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >

              <Image
                // source is barcode 
                source={icons.barcode}
                // resizeMode is contain
                resizeMode='contain'
                style={{
                  // width and height is 20
                  width: 20,
                  height: 20,
                  // tintColor is green
                  tintColor: COLORS.green
                }}
                />
                </View>
                  {/* barcode  text with style font body3 and marginLeft is 8 */}
              <Text style={{ ...FONTS.body3, marginLeft: SIZES.base }}>barcode</Text>
             </TouchableOpacity>
        </View>
      </View>
    )
  }

  // ************************************************************************************************
  // function to display the renderScanFocus
  function renderScanFocus() { 
    return (
      <View
        style={{
          // flex: 1 
          flex: 1,
          // justifyContent & alignItems is center
          justifyContent: 'center',
          alignItems: 'center',
       }}
      >
        <Image
          // source is images.focus 
          source={images.focus}
          // resizeMode is stretch
          resizeMode='stretch'
          style={{
            // marginTop is -55%
            marginTop: '-55%',
            // width is 200 
            width: 200,
            // height is 300 
            height: 300,
          }}
        />
      </View>
    )
  }

  // ********************************************************************************
  // function to display the data when camera can a barcode or text 
  function onBarCodeRead(result) {
    // and display the result.data on a console 
    console.log(result.data)
   }

  return (
    // View with style flex: 1 and backgroundColor is transparent
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* RNCamera  */}
      <RNCamera
        // ref={ref and ref is equal to this.camera}
        ref={ref => {
          this.camera = ref
        }}
        // style with flex:1
        style={{ flex: 1 }}
        // captureAudio is false 
        captureAudio={false}
        // type is RNCamera.constants.back
        type={RNCamera.Constants.back}
        // type is RNCamera.constants.FlashMode.off
        flashMode={RNCamera.Constants.FlashMode.off}
        // onBarCodeRead = onBarCodeRead function 
        onBarCodeRead={onBarCodeRead}
        // for android settings androidRecordAudioPermissionOptions 
        androidRecordAudioPermissionOptions={{
          // title us Permission to use camera 
          title: "Permission to use camera",
          // message is camera is require for barcode scanning
          message: " Camera is required for barcode scanning",
          // buttonPositive is Ok
          buttonPositive: "OK",
          // buttonNegative is Cancel
          buttonNegative: "Cancel",
        }}

      >
        {/* In RNcamera display this 3 functions  */}
        {/* ********************************************************************** */}
        {/* renderHeader function  */}
        {renderHeader()}
        {/* ********************************************************************** */}
        {/* renderScanFocus function  */}
        {renderScanFocus()}
        {/* ********************************************************************** */}
        {/* renderPaymentMethod function  */}
        {renderPaymentMethod()}
      </RNCamera>      
    </View>
  )
}

export default Scan