import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import { ScrollView } from 'react-native';
import { DATA } from '../data.js/index.js';
import Item from '../components/Item';

const MainScreen12 = () => {
    return (
        <View style={{ marginVertical: 44 }}>
            <Navbar tit={'My Wishlist'} isCart />
            <ScrollView>
                <View style={{ flexDirection: 'row', padding: 18, flexWrap: 'wrap' }}>
                    {DATA.map((item, ind) => (
                        <Item key={ind} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default MainScreen12 ;
