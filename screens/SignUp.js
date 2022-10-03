import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView

} from 'react-native'

// import COLORS, SIZES, FONTS, icons, images from constants folder
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
// import LinearGradient from react-native-linear-gradient
import LinearGradient from 'react-native-linear-gradient'

// SignUp screen 
const SignUp = ({ navigation}) => {
 
 const [showPassword, setShowPassword] = useState(true)

  // useSate hook that get all areas data 
  const [areas, setAreas] = useState([])
  // useSate hook that manage the selectedArea 
  const [selectedArea, setSelectedArea] = useState(null)
  // useSate hook that manage the modalVisible
    const [modalVisible, setModalVisible] = useState(false)

  // useEffect hook that get all areas data
  useEffect(() => {
      // fetch areas from restcountries api 
    fetch("https://restcountries.com/v2/all")
          // response into json object 
            .then(response => response.json())
      .then(data => {
              // drom data we only get our require data and store it into areaData 
                let areaData = data.map(item => {
                  return {
                      // code : item.alpha2Code
                    code: item.alpha2Code,
                    // name : is item name 
                    name: item.name,
                        // callingCode is dynamic array with item.callingCode with 0 index 
                    callingCode: `+${item.callingCodes[0]}`,
                        // flag : item.flat.png 
                        flag: item.flags.png
                    }
                })
                // after getting the all data areaData into the setAreas 
                setAreas(areaData)

        // if areaData lenght is greater than zero 
        if (areaData.length > 0) {
                  // make a temporary variable defaultData and filter the areaData and check if a.code is US
                    let defaultData = areaData.filter(a => a.code == "US")
                      // if defaultData lenght is greater than zero
          if (defaultData.length > 0) {
                      // setSelectedArea = defaultData[0]
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])

  
  // ********************************************************************************************************************************
  // function that display the header into our app 
  function renderHeader() {
    return (
      // wrap eveything into the TouchableOpacity to make it touchable 
      <TouchableOpacity style={{
        // marginHorizontal = 32 
        marginHorizontal: SIZES.radius,
        // marginTop = padding * 5
        marginTop: SIZES.padding * 5,
      }}
        // onPress = console.log message
       onPress={()=> console.log('Sign up')}
      >
        {/* View that display the back and flexDirection is row  &&  alignItem center to centerlize it vertically way */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            // souce is icons.back 
            source={icons.back}
            // resizeMode is contain 
            resizeMode='contain'
            style={{
              // width and height is 20
              width: 20,
              height: 20,
              // icon color is white 
              tintColor: COLORS.white
            }}
          />
          {/* Text Sign up with color= white && font is body3, marginLeft is 12 */}
          <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.padding}}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // ********************************************************************************************************************************
  // function that display the Logo  into our app 
  function renderLogo() {
    return (
      // View to display the Logo
      <View
        style={{
          // marginTop= 12*5 
          marginTop: SIZES.padding * 5,
          // height is 100 its is if we not give it logo take it full height 
          height: 100,
          // justifyContent: 'center', alignItems: 'center', to centerlize the logo
          justifyContent: 'center',
          alignItems: 'center',
        }}
       >
        <Image
          // souce is image.wallieLogo
          source={images.wallieLogo}
          // resizeMode is conatin 
          resizeMode='contain'
          style={{
            // width is 60% of screen width 
            width: '60%',
          
          }}
        />
      </View>
    )
  }

  // ********************************************************************************************************************************
  // function that display the Form  into our app 
  function renderForm() {
    return (
      // View the display all the fields 
      <View
        style={{
          // marginTop its 12*3 
          marginTop: SIZES.padding * 3,
          // marginHorizontal is 12*3
          marginHorizontal: SIZES.padding * 3
        }}
      >
        {/* ******************************************************************************************************************************** */}
        {/* view that display the Full Name Field */}
        <View style={{
          // marginTop is 12*3
          marginTop: SIZES.padding * 3,
        }}>
          {/* Text full name with color= lightGreen and font is body3 */}
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
          {/* TextInput field to make textinput */}
          <TextInput
            style={{
              // marginVertical is 12
              marginVertical: SIZES.padding,
              // borderBottomColor is white 
              borderBottomColor: COLORS.white,
              // borderBottomWidth is 1 
              borderBottomWidth: 1,
              // height is 40 to make it little expand 
              height: 40,
              // color is white 
              color: COLORS.white,
              // font is body3
              ...FONTS.body3
            }}
            // placeholder 
            placeholder="Enter Full Name"
            // placeholderTextColor is white 
            placeholderTextColor={COLORS.white}
            // on selection color is white 
            selectionColor={COLORS.white}
          />
        </View>
        {/* ******************************************************************************************************************************** */}
        {/* view that display the phone number Field */}
        <View style={{
          // marginTop is 12*2
          marginTop: SIZES.padding * 2,
        }}>
          {/* Text full name with color= lightGreen and font is body3 */}
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>
          {/* view that hold the phone number filed */}
          <View
            style={{
              // flexDirection is row to show everything into a row 
              flexDirection: 'row',
            }}
          >
            {/* wrap eveything into a touchableOpacity to make it touchable  */}
            <TouchableOpacity
              style={{
                // give it width 100 
                width: 100,
                // height is 50 
                height: 50,
                // marginHorizontal is 5 
                marginHorizontal: 5,
                // borderBottomColor is white 
                borderBottomColor: COLORS.white,
                // alignItems center to centerlize it horizontally
                alignItems: 'center',
                // borderBottomColor is 1 
                borderBottomWidth: 1,
                // flexDirection is row to display it as a row 
                flexDirection: 'row',
                // font is body2 
                ...FONTS.body2
              }}
              // onPress show modal that take name and number 
              onPress={() => setModalVisible(true)}
            >
              {/* View that display the arrow down  */}
              <View style={{
                // justifyContent: 'center', to centerlize it vertically
                justifyContent: 'center',
              }}>
                <Image
                  // image with souce it icons.down
                  source={icons.down}
                  style={{
                    // width and height is 10 
                    width: 10,
                    height: 10,
                    // tintColor is white 
                    tintColor: COLORS.white
                  }}
                />
              </View>
              {/* make an other view that display the Flag  */}
              <View style={{
                // give it marginLeft is 8 
                marginLeft: SIZES.base,
                // flexDirection: 'row',
                // justifyContent: 'center', to centerlize it vertically 
                justifyContent: 'center',
              }}>
                <Image
                  // source is usFlag
                  source={{ uri: selectedArea?.flag}}
                  // resizeMode is contain 
                  resizeMode="contain"
                  style={{
                    // width and height is 30 
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              {/* View that display the country code  */}
              <View style={{
                // justifyContent: 'center', to centerlize it vertically
                justifyContent: 'center',
                // marginLeft is 8
                marginLeft: SIZES.base
              }}>
                {/* Text country code with color is lightGreen with font is body3  */}
                <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>{ selectedArea?.callingCode}</Text>
              </View>
            </TouchableOpacity>
            {/* ******************************************************************************* */}
            {/* text for display the phone number  */}
            <TextInput
              style={{
                // textInput with flex:1 to take all remaining space of the line 
                flex: 1,
                // borderBottomColor is white 
                borderBottomColor: COLORS.white,
                // borderBottomWidth is 1 
                borderBottomWidth: 1,
                // marginVertical is 12
                marginVertical: SIZES.padding,
                // height is 40 to spread it 
                height: 40,
                // color is white 
                color: COLORS.white,
              }}
              // placeholder is enter phone number
              placeholder='Enter Phone Number'
              // placeholder text color is white 
              placeholderTextColor={COLORS.white}
              // selection color is also white 
              selectionColor={COLORS.white}
            />
           </View>
        </View>
        {/* ******************************************************************** */}
        {/* Password */}
        <View style={{
          // marginTop is 20
          marginTop: SIZES.padding * 2,
        }}>
          {/* text is password with styling is lightGreen and font is body3  */}
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
          {/* textInput to take password  */}
          <TextInput
            style={{
              // marginVertical is 10
              marginVertical: SIZES.padding,
              // borderBottomColor is white
              borderBottomColor: COLORS.white,
              // borderBottmWidth is 1 
              borderBottomWidth: 1,
              // height is 40 to spead it littel bit 
              height: 40,
              // color is white
              color: COLORS.white,
              // font is body3 
              ...FONTS.body3
            }}
            // placeholder is enter Password
            placeholder="Enter Password"
            // placeholderTextColor is white
            placeholderTextColor={COLORS.white}
            // selectionColor is white
            selectionColor={COLORS.white}
            // secureTextEntry is equal to showPassword state 
            secureTextEntry={showPassword}
          />
          {/* because text input we add eye toggle functionality we wrap our image into touchableopacity */}
          <TouchableOpacity
            style={{
              // position is absolute
              position: 'absolute',
              // from right is 0 
              right: 0,
              // from bottom is 10 
              bottom: 10,
              // height is 30 
              height: 30,
              // width is 30 
              width: 30,
            }}
            // onPress of setShowPassword and reserve it if its true make it false if false make it true
            onPress={() => setShowPassword(!showPassword)}
          >
            {/* image to display eye icon  */}
            <Image
              // source if showPassword is true then display the icons,disable eye otherwise icon.eye 
              source={showPassword ? icons.disable_eye : icons.eye} 
              style={{
                // height and width is 20 
                height: 20,
                width: 20,
                // tintColor is white
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  // ********************************************************************************
  // function that display the submit button
  function renderButton() {
    return (
      <View
        // make a button with margin is 30 
        style={{
         margin: SIZES.padding * 3
       }}
      >
        {/* TouchableOpacity to make a text touchable  */}
        <TouchableOpacity
          style={{
            // height is 60
            height: 60,
            // justifyContent and alignItems: 'center' to centerlize it 
            justifyContent: 'center',
            // backgroundColor is black 
            backgroundColor: COLORS.black,
            alignItems: 'center',
            // borderRadius is 20
            borderRadius: SIZES.padding * 2
          }}
          // onPress navigate to tabs files 
          onPress={()=> navigation.navigate('Tabs')}
        >
          {/* text is continue with color is white and font is h3  */}
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }

  //******************************************************
  // make a areaCodeModal then click on flag 
  function renderAreaCodeModal() {

    // renderItem function that tell how to show the data 
   const renderItem = ({ item }) => {
     return (
        // wrap eveything into the touchabale opacity to make it touchable 
        <TouchableOpacity
         style={{
            // padding is 10 
           padding: SIZES.padding,
          //  flex direction is row 
            flexDirection: 'row'
         }}
        //  onPress setSelectedArea is equal to item and setModalVisible is false 
          onPress={() => {
            setSelectedArea(item)
            setModalVisible(false)
          }}
       >
         {/* image  */}
         <Image
          //  source is uri: item.flag because we get it online image 
            source={{ uri: item.flag }}
           style={{
              // width and height is 30 
              width: 30,
             height: 30,
              // marginRight is 10 
              marginRight: 10,
            }}
         />
         {/* text  item.name with font is body4  */}
          <Text style={{...FONTS.body4}}>{item.name}</Text>
        </TouchableOpacity>
      )
    }

    return (
      // wrap eveything into the modal 
      <Modal
        // animationType is slider 
        animationType='slide'
        // transparent is true 
        transparent={true}
        // vsisble is modalVisible state 
        visible={modalVisible}
      >
        {/* Wrap eveyting without feedback touchableOpacity  */}
        <TouchableWithoutFeedback
          // whenEvery press on this setModalVisible is false 
         onPress={() => setModalVisible(false)}
        >
          {/* View the hold the itmes  */}
          <View style={{
            // flex is 1 
            flex: 1,
            // alignItems and justifyContent is center to centerlize it 
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View
              style={{
              // View that height is 400 
                height: 400,
                // width is 80% of screen size 
                width: SIZES.width * 0.8,
                // backgroundColor is lightGreen
                backgroundColor: COLORS.lightGreen,
                // borderRadius is radius 
                borderRadius: SIZES.radius
            }}
            >
              {/* flatlist to display the all that  */}
              <FlatList
                // data is areas 
                data={areas}
                // renderItem is renderItem function 
                renderItem={renderItem}
                // keyExtractor is item.code
                keyExtractor={(item) => item.code}
                // shoeVerticalScrollIndicator is false 
                showsVerticalScrollIndicator={false}
                style={{
                  // style of flatlist is padding is 20 
                  padding: SIZES.padding * 2,
                  // marginBottm is 20 
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }


  return (
    // Wrap eveything into the KeyboardAvoidingView because our signup page is form type 
    <KeyboardAvoidingView
      // check if platform is ios then behavior is padding otherwise its null
      behavior={Platform.OS === 'ios' ? 'padding' : null} 
      // style with flex = 1
      style={{
        flex: 1,
      }}
    >
      {/* LinearGradient to achieve the linear gradient effect */}
      <LinearGradient
        // colors is lime and emerald
        colors={[COLORS.lime, COLORS.emerald]}
        // style with flex = 1
        style={{
          flex: 1,
        }}
      >
        {/* wrap eveything into the scrollView to make our screen Scrollable */}
        <ScrollView>
          {/* **************************************************************** */}
          {/* function that display the header  */}
          {renderHeader()}
          {/* **************************************************************** */}
          {/* function that display the logo  */}
          {renderLogo()}
          {/* **************************************************************** */}
          {/* function that display the signup form  */}
          {renderForm()}
          {/* function that display the signup button  */}
          {renderButton()}
          
        </ScrollView>
      </LinearGradient>
      {renderAreaCodeModal()}
    </KeyboardAvoidingView>
  )
}

export default SignUp