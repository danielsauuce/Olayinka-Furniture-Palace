import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ShoppingBag } from 'lucide-react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';



const { width } = Dimensions.get('window');

export default function HomeScreen() {

  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>
            Olayinka
          </Text>
          <Text>
            Furniture Palace
          </Text>
        </View>

        <View >
          <View >
            <View>


            </View >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80' }}

              contentFit="cover"
            />
          </View>
        </View>

        <View >
          <View >
            <Text>
              Featured Collection
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>

          <View >

          </View>
        </View>

        <View className=''>
          <ShoppingBag />
          <Text >
            Quality Craftsmanship
          </Text>
          <Text>
            Each piece is carefully selected and crafted to bring warmth and style to
            your space
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}