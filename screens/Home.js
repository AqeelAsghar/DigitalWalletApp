import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native'

import { SIZES, COLORS, FONTS, images, icons } from '../constants'


const Home = () => {
  // featuresData array 
   const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    // specialPromoData array 
    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]
  
  // ********************************************************************************************
  // features useState hook that take featuresData
  const [features, setFeatures] = useState(featuresData)
  // features useState hook that take featuresData
  const [specialPromos, setSpecialPromos] = useState(specialPromoData)

  // ************************************************************************************************
  // function that display the header into Home screen 
  function renderHeader() {
    return (
      // View that hold the header 
      <View style={{
        // flexDirection is row to diplay eveyhting into a row
        flexDirection: 'row',
        // paddingHorizontal: 20 
        paddingHorizontal: SIZES.padding * 2,
        // paddingVertical: 20
        paddingVertical: SIZES.padding * 2,
        // justifyContent: 'space-between'
        justifyContent: 'space-between',
      }}>
        <View
        >
          {/* hello text with font h1  */}
          <Text style={{ ...FONTS.h1 }}>Hello!</Text>
          {/* Aqeel Ahmad text with font body2 , color is gray  */}
          <Text style={{...FONTS.body2, color: COLORS.gray}}>Aqeel Ahmad</Text>
        </View>
        {/* view that display the notification  */}
        <View
          style={{
            // justifyContent and alignItems is center to centerlize it 
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* wrap eveyting into the touchableOpacity to make it touchable  */}
          <TouchableOpacity
            style={{
              // justifyContent and alignItems is center to centerlize item
             justifyContent: 'center',
              alignItems: 'center',
            // height and width is 50 
            height: 50,
              width: 50,
            // backgroundColor is lightGray
              backgroundColor: COLORS.lightGray,
            // borderRadius is 25 
            borderRadius: 25
          }}
          >
            <Image
              // source is icons,bell 
              source={icons.bell}
              // resizeMode is contain
            resizeMode="contain"
              style={{
              // height and width is 30 
              height: 30,
              width: 30,
            }}
            />
            {/* View that display the dot into above the notification  */}
            <View
              style={{
                // position is absolute 
                position: "absolute",
                // top,right is 0 
                top: 0,
                right: 0,
                // height and width is 10 
                height: 10,
                width: 10,
                // backgroundColor is red 
                backgroundColor: COLORS.red,
                // borderRadius is 5 
                borderRadius: 5,
              }}
            >
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  } 

  // ********************************************************************************************************************************
  // function that display the banner into Home page 
  function renderBanner() { 
    return (
      // view that hold the banner 
      <View
        style={{
          // height is 120 
          height: 120,
          // borderRadius is 20 
          borderRadius: 20,
        }}
      >
        <Image
          // source is images.banner 
          source={images.banner}
          // resizeMode is cover 
          resizeMode="cover"
          style={{
            // height and width is 100%
            height: '100%',
            width: "100%",
            // borderRadius is 20 
            borderRadius: 20
          }}
          
        />
      </View>
    )
  }

  // ***********************************************************************************************************
  // function renderFeatures to display the features
  function renderFeatures() {
    // make a header function for the features
    const Header = () => (
      <View style={{
        // marginBottom is 20 
        marginBottom: SIZES.padding * 2
      }}>
        {/* features text with font h3  */}
        <Text style={{...FONTS.h3}}>Features</Text>
      </View>
    )

    // renderItem function for the FlatList with item as a prop 
    const renderItem = ({ item }) => {
      return (
        //wrap eveything into the  TouchableOpacity to make it touchable 
        <TouchableOpacity
          style={{
            // padding is 13 
            padding: SIZES.padding * 1.3,
            // width is 80 
            width: 80
          }}
          // Onpress display the item.description into the console 
          onPress={()=> console.log(item.description)}
        >
          {/* view that display the feature icons  */}
          <View
            style={{
              // width and height is 50 
              height: 50,
              width: 50,
              // backgroundColor is item.backgroundColor
              backgroundColor: item.backgroundColor,
              // borderRadius is 25 
              borderRadius: 25,
              // justifyContent and alignItems is center to centerlize it 
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              // source is item.icon
              source={item.icon}
              // resizeMode is contain
              resizeMode="contain"
              style={{
                // height and width is 30 
                width: 30,
                height: 30,
                // tintColor is item.color 
                tintColor: item.color
              }}
            />
          </View>
          {/* view that display the description  */}
          <View style={{
            // alignItems is center 
            alignItems: 'center',
            // marginTop is 8
            marginTop: SIZES.base,
          }}>
            {/* item.description text with font.body4 and wrap the text for avoing overflow  */}
            <Text style={{...FONTS.body4, flexWrap: 'wrap'}}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      // FlatList to display the features
      <FlatList
        // ListHeaderComponent is equal to Header function 
        ListHeaderComponent={Header}
        // contentContainerStyle is padding is 20 
        contentContainerStyle={{ padding: SIZES.padding * 2 }}
        // numColumns is 4 
        numColumns={4}
        // columnWrapperStyle is justifyContent is space-between 
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        // data is equal to features 
        data={features}
        // keyExtractor is dynamic item.id 
        keyExtractor={item => `${item.id}`}
        // renderItem is renderItem function 
        renderItem={renderItem}
        // showsVerticalScrollIndicator is false 
        showsVerticalScrollIndicator={false}
        // style 
        style={{
          // marginTop is 20 
          marginTop: SIZES.padding * 2
        }}
      />
    )
   }
 
  // ********************************************************************************************************************************
  // function that display the tha promos 
  function renderPromos() {
    // HeaderComponent function and into this display all remaining components to avoid VisualMode error 
    const HeaderComponent = () => (
      <View>
        {/* renderHeaderFunction to display the header  */}
        {renderHeader()}
        {/* renderBanner to display the banner  */}
        {renderBanner()}
        {/* renderFeatures to display the features  */}
        {renderFeatures()}
        {/* renderpromodHeader to display the Promos Header  */}
        {renderPromosHeader()}
        </View>
      )
     
    // function renderPromosHeader to display the Promos Header
    function renderPromosHeader() {
      return (
        // view that hold the header 
        <View
          style={{
            // flexDirection is row 
            flexDirection: "row",
            // marginBottom is 10 
            marginBottom: SIZES.padding
          }}
        >
          {/* view with flex:1  */}
          <View style={{ flex: 1 }}>
            {/* special Promos with text font.h3  */}
            <Text style={{ ...FONTS.h3}}>Special Promos</Text>
          </View>
          <TouchableOpacity
            // onPress is View All console.log 
           onPress={() => console.log('View All')}
          >
            {/* text view all with style color is gray font is body3  */}
            <Text style={{color: COLORS.gray, ...FONTS.body3}}>View All</Text>
          </TouchableOpacity>
        </View>
      )
    }
    // renderitem function for display with item prop 
    const renderItem = ({ item }) => (
          // TouchableOpacity to make cards touchable 
            <TouchableOpacity
        style={{
                  // marginVertical is 8 
          marginVertical: SIZES.base,
          // width is screen.width and divide it into 2.5 parts 
                    width: SIZES.width / 2.5
        }}
        // onPress item.title into the console 
                onPress={() => console.log(item.title)}
      >
        {/* View that display the card banner  */}
        <View
          style={{
                      // height is 80 
            height: 80,
            // borderTopLeftRadius is 20 
            borderTopLeftRadius: 20,
                        // borderTopRightRadius is 20 
            borderTopRightRadius: 20,
                        // backgroundColor is primary 
                        backgroundColor: COLORS.primary
                    }}
                >
          <Image
            // source is images.promoBanner 
            source={images.promoBanner}
            // resizeMode is cover 
                        resizeMode="cover"
            style={{
                          // width and height is 100%
                            width: "100%",
              height: "100%",
                            // borderTopLeftRadius, borderTopRightRadius is 20 
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

        {/* View to display the item.title and item description  */}
                <View
          style={{
                      // padding is 10 
            padding: SIZES.padding,
            // backgroundColor is lightGray 
            backgroundColor: COLORS.lightGray,
                            // borderTopLeftRadius, borderTopRightRadius is 20 
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
        >
          {/* item title text with font h4 style  */}
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
          {/* item title text with font body4 style  */}
                    <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

    return (
          // FlatList to display the Promos 
      <FlatList
        // ListHeaderComponent is HeaderComponent that displays the all other components of the Home page 
        ListHeaderComponent={HeaderComponent}
        // contentContainerStyle is paddingHorizontal is 30 
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        // numColumns is 2 
        numColumns={2}
        // columnWrapperStyle is justifyContent is space-between 
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        // data is specialPromos 
        data={specialPromos}
        // keyExtractor is dynamic item.id 
        keyExtractor={item => `${item.id}`}
        // renderItem is renderItem function 
        renderItem={renderItem}
        // showsVerticalScrollIndicator is flase 
        showsVerticalScrollIndicator={false}
        // ListFooterComponent 
        ListFooterComponent={
                  // style is marginBottom is 80 
                  <View style={{marginBottom: 80}}>

                </View>
            }
            />
        )
    }

  return (
      // wrap eveything into the SafeAreaView with flex is 1 and backgroundColor is white 
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* and display the renderPromos  */}
            {renderPromos()}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Home

