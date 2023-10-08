import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { DATA } from '../data.js';
import Item from '../components/Item';
import Navbar from '../components/Navbar.js';


const MainScreen11  = () => {
    return (
        <View style={{ marginVertical: 44 }}>
            <Navbar inp isCart />
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

export default MainScreen11 ;
