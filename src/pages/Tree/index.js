import React from 'react';
import { StyleSheet, Text,View,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header2 } from '../../component';
import { avatartree,avatartreepasif,avatar,circleup,circleright,circledown} from '../../assets';



const Type = (props) =>{
    return(
        <View style={{flexDirection:'row'}}>
            <View style={[styles.type,{backgroundColor:props.backgroundColor,borderColor:props.borderColor}]}></View>
            <Text style={{paddingHorizontal:5, color:'#696969'}}>{props.text}</Text>
        </View>
    )
}

const ExpandRight =()=>{
    return(
        <View style={{flexDirection:'row', height:500}}>
            <View style={{justifyContent:'center'}}>
                <LineHorizontal/>
            </View>
            <View style={{justifyContent:'center'}}>
                <View style={styles.boxExpand}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Image source={circleright} style={{width:20, height:20, marginRight:5}}/>
                        <Text style={styles.textExpand}>Expand</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const ExpandDown =()=>{
    return(
        <View style={styles.boxExpand}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image source={circledown} style={{width:20, height:20, marginRight:5}}/>
                <Text style={styles.textExpand}>Expand</Text>
            </View>
       </View>
    )
}
const LineVertical =()=>{
    return(
        <View style={{backgroundColor:'#696969',height : 140, width:1}}>

        </View>
    )
}
const LineHorizontal =()=>{
    return(
        <View style={{backgroundColor:'#696969', height:1, width:70}}>
        </View>
    )
}


const BoxDataLeft =()=>{
    return(
        <View>
            <View style={{width:220,alignItems:'center',}}>
                <View style={styles.boxExpand}>
                 <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Image source={circleup} style={{width:20, height:20, marginRight:5}}/>
                        <Text style={styles.textExpand}>Expand</Text>
                    </View>
                </View>
                <View style={{width:220, height:100, alignItems:'center'}}>
                    <LineVertical/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.boxData}>
                <View style={{alignItems:'center', bottom:190, position:'absolute'}}>
                    <Image source={avatar} style={{width:80, height:80}}/>
                </View>
                <View style={[styles.boxText,{justifyContent:'space-between'}]}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row', marginVertical:10}}>
                        <Type 
                            backgroundColor='#1AE383' 
                            borderColor='#13CE75'   
                        />
                        <Type 
                            backgroundColor='#E5E5E5' 
                            borderColor='#DDDCDC' 
                        />
                         <Type 
                            backgroundColor='#FFDC26' 
                            borderColor='#EFBD3C'
                            
                        />
                          <Type 
                            backgroundColor='#FF0000' 
                            borderColor='#E30303'
                           
                        />
                    </View>
                </View>
                    <View style={styles.boxText}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Code </Text>
                        </View>
                        <View style={{flex:0.1}}>
                            <Text style={styles.text}>:</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.text}>123456</Text>
                        </View>
                    </View>
                    <View style={styles.boxText}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Nama</Text>
                        </View>
                        <View style={{flex:0.1}}>
                            <Text>:</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.text}>Surya Dwipayana</Text>
                        </View>
                    </View>
                    <View style={styles.boxText}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Type</Text>
                        </View>
                        <View style={{flex:0.1}}>
                            <Text style={styles.text}>:</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.text}>Gold</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', height:1, backgroundColor:'#C4C4C4',marginVertical:5}}></View>
                    <View style={styles.boxText}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>Activasi</Text>
                        </View>
                        <View style={{flex:0.1}}>
                            <Text style={styles.text}>:</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.text}>2021-08-11</Text>
                        </View>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <LineHorizontal/>
                </View>
            </View>
        </View>
    )
}

const BoxDataMid =(props)=>{
    return(
        <View style={{alignItems:'center'}}>
             <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:props.LineVertical? props.LineVertical:'#696969',height : 140, width:1}}>
                </View>
            </View>
            <View style={styles.boxData}>
            <View style={{alignItems:'center', bottom:190, position:'absolute'}}>
                <Image source={avatar} style={{width:80, height:80}}/>
            </View>
                <View style={[styles.boxText,{justifyContent:'space-between'}]}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row', marginVertical:10}}>
                        <Type 
                            backgroundColor='#1AE383' 
                            borderColor='#13CE75'   
                        />
                        <Type 
                            backgroundColor='#E5E5E5' 
                            borderColor='#DDDCDC' 
                        />
                         <Type 
                            backgroundColor='#FFDC26' 
                            borderColor='#EFBD3C'
                            
                        />
                          <Type 
                            backgroundColor='#FF0000' 
                            borderColor='#E30303'
                           
                        />
                    </View>
                </View>
                <View style={styles.boxText}>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Code </Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.text}>123456</Text>
                    </View>
                </View>
                <View style={styles.boxText}>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Nama</Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Text>:</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.text}>Surya Dwipayana</Text>
                    </View>
                </View>
                <View style={styles.boxText}>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Type</Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.text}>Gold</Text>
                    </View>
                </View>
                <View style={{width:'100%', height:1, backgroundColor:'#C4C4C4',marginVertical:5}}></View>
                <View style={styles.boxText}>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Activasi</Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.text}>2021-08-11</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <LineVertical/>
            </View>
            {props.end}
        </View>
    )
}

const Tree = () => {
    return (
        <SafeAreaView style={styles.container}>
                <Header2 title ='Pohon Jaringan' btn={() => navigation.goBack()}/>
                {/* <ScrollView> */}
                    <View style={styles.box}>
                        <View style={{flexDirection:'row', flex:1}}>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                                <View style={{alignItems:'center', paddingHorizontal:5}}>
                                    <Image source={avatartree} style={{width:40, height:40}}/>
                                    <Text style={{color:'#696969'}}>Active User</Text>
                                </View>
                                <View style={{alignItems:'center', paddingHorizontal:5}}>
                                    <Image source={avatartreepasif} style={{width:40, height:40}}/>
                                    <Text style={{color:'#696969'}}>Inactive User</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row', flex:1,justifyContent:'center', alignItems:'center'}}>
                                <View style={{paddingHorizontal:5}}>
                                    <View style={{paddingVertical:5}}>
                                        <Type 
                                            backgroundColor='#1AE383' 
                                            borderColor='#13CE75' 
                                            text='User'
                                        />
                                    </View>
                                    <View style={{paddingVertical:5}}>
                                        <Type 
                                            backgroundColor='#FFDC26' 
                                            borderColor='#EFBD3C'
                                            text='Gold'    
                                        />
                                    </View>
                                </View>
                                <View style={{paddingHorizontal:5}}>
                                    <View style={{paddingVertical:5}}>
                                        <Type 
                                            backgroundColor='#E5E5E5' 
                                            borderColor='#DDDCDC' 
                                            text='Silver'
                                        />
                                    </View>
                                    <View style={{paddingVertical:5}}>
                                        <Type 
                                            backgroundColor='#FF0000' 
                                            borderColor='#E30303'
                                            text='Platinum'    
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{alignItems:'center', marginHorizontal:20}}>
                            <ScrollView horizontal pagingEnabled style={{paddingVertical:20}}>
                                <View style={{flexDirection:'column', alignItems:'center'}}>

                                    <View style={{paddingHorizontal:20, flexDirection:'row',height:'auto'}}>
                                        <View style={{width:270, height:230, flexDirection:'row',justifyContent:'center'}}>
                                            <BoxDataLeft/>
                                        </View>
                                        <BoxDataMid LineVertical='#F4F4F4'/>
                                        <ExpandRight/>
                                    </View>

                                    <View style={{paddingHorizontal:20, flexDirection:'row',height:'auto'}}>
                                        <View style={{width:270, height:230, flexDirection:'row',justifyContent:'center'}}>
                                            <BoxDataLeft/>
                                        </View>
                                        <BoxDataMid/>
                                        <ExpandRight/>
                                    </View>

                                    <View style={{paddingHorizontal:20, flexDirection:'row',height:'auto'}}>
                                        <View style={{width:270, height:230, flexDirection:'row',justifyContent:'center'}}>
                                        </View>
                                        <BoxDataMid end={<ExpandDown/>}/>
                                        <ExpandRight/>
                                    </View>
    
                                </View>
                                
                            </ScrollView>
                        </View>
                    </ScrollView>

                {/* </ScrollView> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
container : {
    flex :1,
    backgroundColor : '#f4f4f4'
  },
  box:{
    backgroundColor:"white",
    elevation:10,
    padding:10,
    width:"100%",
    height:80
  },
  boxData:{
    elevation:5,
    padding:20,
    paddingTop:30,
    width:220,
    backgroundColor:'#FFFFFF',
    // borderWidth:1,
    // borderColor:'blue',
    height:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  boxExpand:{
    elevation:5,
    padding:20,
    height:30,
    width:150,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'
  },
  boxText:{
    flexDirection:'row',
    height:'auto',
    paddingVertical:2,
  
  },
  text:{
    color:'#696969',
    fontSize:15
  },
  textExpand:{
    color:'#3C9DD8',
    fontSize:15,
    fontWeight:'bold'
  },
  type:{
    width:20, 
    height:20, 
    borderRadius:20, 
    borderWidth:2
  }

})
export default Tree


