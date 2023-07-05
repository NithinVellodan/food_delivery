import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LocationLogo from '../../assets/images/Location.svg';
import TrashLogo from '../../assets/images/trash.svg';
import Arrow from '../../assets/images/Arrow.svg';

export default function Home() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Halal Chicken',
      brand: 'Arizona Meat',
      image: require('../../assets/images/featureimage1.jpg'),
      quantity: '1 KG',
      price: '54.99',
    },

    {
      id: 2,
      name: 'Pasturized Milk',
      brand: 'Arizona Meat',
      image: require('../../assets/images/featureimage2.jpg'),
      quantity: '1 L',
      price: '23.99',
    },

    {
      id: 3,
      name: 'Fresh Vegetables',
      brand: 'Arizona Meat',
      image: require('../../assets/images/featureimage3.jpg'),
      quantity: '1 KG',
      price: '10.99',
    },
  ]);
  const renderCategories = () =>
    categories.map(category => (
      <TouchableOpacity key={category.id} style={styles.featuredContainer}>
        <Image style={styles.featuredImage} source={category.image} />
        <Text style={styles.featureHeading}>{category.name}</Text>
        <Text style={styles.featurePara}>By {category.brand}</Text>

        <View style={styles.featureDetail}>
          <View style={styles.featureRate}>
            <View style={styles.kilogramWrapper}>
              <Text style={styles.kilogram}>{category.quantity}</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}> ${category.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.location}>
          <LocationLogo width={27} height={27} />
        </View>

        <View style={styles.textHead}>
          <Text style={styles.locationText}>My Location</Text>
          <Text style={styles.placeText}>464 Royal Mesa, New Jersey</Text>
        </View>

        <View style={styles.trashLogo}>
          <TrashLogo width={30} height={30} />
        </View>
      </View>
      <View style={styles.steakContainer}>
        <ImageBackground
          style={styles.topImage}
          source={require('../../assets/images/TopSteak.jpg')}>
          <View style={styles.shadowOverlay} />
          <View style={styles.steakPara}>
            <Text style={styles.fillet}>FILLET STEAK</Text>
            <Text style={styles.suppliers}>212 Suppliers</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.featuredText}>Featured Offers</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderCategories()}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.featuredText}>Featured Offers</Text>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.productList}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/product2.jpg')}
              />
              <View style={styles.productDescription}>
                <Text style={styles.productHeading}>Campari tomato</Text>
                <Text style={styles.productPara}>6 kg- Arizona Meat</Text>
                <Text style={styles.productRate}>$15/box</Text>
              </View>
              <View style={styles.arrow}>
                <Arrow width={30} height={30} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.productList}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/product2.jpg')}
              />
              <View style={styles.productDescription}>
                <Text style={styles.productHeading}>Campari tomato</Text>
                <Text style={styles.productPara}>6 kg- Arizona Meat</Text>
                <Text style={styles.productRate}>$15/box</Text>
              </View>
              <View style={styles.arrow}>
                <Arrow width={30} height={30} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.productList}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/product2.jpg')}
              />
              <View style={styles.productDescription}>
                <Text style={styles.productHeading}>Campari tomato</Text>
                <Text style={styles.productPara}>6 kg- Arizona Meat</Text>
                <Text style={styles.productRate}>$15/box</Text>
              </View>
              <View style={styles.arrow}>
                <Arrow width={30} height={30} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.productList}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/product2.jpg')}
              />
              <View style={styles.productDescription}>
                <Text style={styles.productHeading}>Campari tomato</Text>
                <Text style={styles.productPara}>6 kg- Arizona Meat</Text>
                <Text style={styles.productRate}>$15/box</Text>
              </View>
              <View style={styles.arrow}>
                <Arrow width={30} height={30} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    marginRight: 50,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  placeText: {
    color: '#b8b8b8',
  },
  trashLogo: {
    backgroundColor: '#f4f5f7',
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  steakContainer: {
    paddingVertical: 25,
  },
  topImage: {
    borderRadius: 10,
    width: 350,
    height: 150,
    position: 'relative',
    overflow: 'hidden',
  },
  shadowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    shadowColor: 'black',
    shadowOffset: {
      width: -10,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  steakPara: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  fillet: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Inter-Bold.ttf',
  },
  suppliers: {
    color: '#FFF',
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  featuredContainer: {
    paddingVertical: 10,
    marginRight: 10,
  },
  featuredImage: {
    borderRadius: 10,
    width: 230,
    height: 100,
    marginBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  featureHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Inter-Bold.ttf',
  },
  featurePara: {
    fontSize: 12,
    fontFamily: 'Inter-Bold.ttf',
    color: '#b8b8b8',
    marginBottom: 5,
  },
  featureDetail: {
    backgroundColor: '#2368df',
    width: 230,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  featureRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  kilogramWrapper: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  kilogram: {
    padding: 5,
    color: '#fff',
    fontSize: 12,
  },
  price: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },

  productImage: {
    borderRadius: 8,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDescription: {
    marginRight: 70,
  },
  productHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Inter-Bold.ttf',
  },

  productPara: {
    fontSize: 12,
    fontFamily: 'Inter-Bold.ttf',
    color: '#7b7b7b',
    paddingVertical: 5,
  },
  productRate: {
    fontSize: 12,
    fontFamily: 'Inter-Bold.ttf',
    color: '#b8b8b8',
  },

  arrow: {
    backgroundColor: 'black',
    borderRadius: 14,
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
