import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ShopIcon from '../../assets/images/Shop.svg';

export default function Order() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentSection}>
        <Text style={styles.listText}>Your orders</Text>
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}>
          <View style={styles.activeCard}>
            <View style={styles.topSection}>
              <View style={styles.leftSection}>
                <View style={styles.iconContainer}>
                  <ShopIcon width={25} height={25} />
                </View>
                <View style={styles.detailsSection}>
                  <Text style={styles.orderText}>Order #185874</Text>
                  <Text style={styles.dateText}>Fri 21 Aug - 10:21 AM</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <View style={styles.userSection}>
                  <Text style={styles.statusText}>ACTIVE</Text>
                  <View style={styles.userContainer}>
                    <Text style={styles.byText}>by</Text>
                    <Text style={styles.userNameTxt}>Amina Ngyuen</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.dashedLine}></View>
            <View style={styles.bottomSection}>
              <View style={styles.bottomLeft}>
                <View style={styles.productListImage}>
                  <Image
                    source={require('../../assets/images/featureimage3.jpg')}
                    style={styles.productImageOne}
                  />
                  <Image
                    source={require('../../assets/images/product1.jpg')}
                    style={styles.productImageTwo}
                  />
                  <Image
                    source={require('../../assets/images/tomato.jpg')}
                    style={styles.productImageThree}
                  />
                  <Text style={styles.productRemainTxt}>+4</Text>
                </View>
              </View>
              <Text style={styles.productTotalTxt}>7 Items</Text>
              <Text style={styles.priceSection}>$512.00</Text>
            </View>
          </View>

          <View style={styles.finishedCard}>
            <View style={styles.topSection}>
              <View style={styles.leftSection}>
                <View style={styles.iconContainer}>
                  <ShopIcon width={25} height={25} />
                </View>
                <View style={styles.detailsSection}>
                  <Text style={styles.orderText}>Order #185874</Text>
                  <Text style={styles.dateText}>Fri 21 Aug - 10:21 AM</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <View style={styles.userSection}>
                  <Text style={styles.statusTextFinished}>FINISHED</Text>
                  <View style={styles.userContainer}>
                    <Text style={styles.byText}>by</Text>
                    <Text style={styles.userNameTxt}>Amina Ngyuen</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.dashedLine}></View>
            <View style={styles.bottomSection}>
              <Text style={styles.productTotalTxtExpanded}>7 Items</Text>
              <Text style={styles.priceSection}>$512.00</Text>
            </View>

            <View style={styles.bottomSubSection}>
              <View style={styles.expandedSection}>
                <View style={styles.leftDetailSection}>
                  <Image
                    source={require('../../assets/images/product5.jpg')}
                    style={styles.productImage}
                  />
                  <View style={styles.detailSubSection}>
                    <Text style={styles.productTitle}>
                      Fresh Sirioin filet steak
                    </Text>
                    <Text style={styles.productBrand}>6 kg - Arizona Meat</Text>
                  </View>
                </View>
                <Text style={styles.rightPriceSection}>$512.00</Text>
              </View>
              <View></View>
              <View></View>
            </View>

            <View style={styles.bottomSubSection}>
              <View style={styles.expandedSection}>
                <View style={styles.leftDetailSection}>
                  <Image
                    source={require('../../assets/images/product1.jpg')}
                    style={styles.productImage}
                  />
                  <View style={styles.detailSubSection}>
                    <Text style={styles.productTitle}>Button Mushrooms</Text>
                    <Text style={styles.productBrand}>
                      6 kg - Aguero Family Garden
                    </Text>
                  </View>
                </View>
                <Text style={styles.rightPriceSection}>$512.00</Text>
              </View>
              <View></View>
              <View></View>
            </View>

            <View style={styles.bottomSubSection}>
              <View style={styles.expandedSection}>
                <View style={styles.leftDetailSection}>
                  <Image
                    source={require('../../assets/images/featureimage3.jpg')}
                    style={styles.productImage}
                  />
                  <View style={styles.detailSubSection}>
                    <Text style={styles.productTitle}>
                      Fresh Sirioin filet steak
                    </Text>
                    <Text style={styles.productBrand}>6 kg Arizona Meat</Text>
                  </View>
                </View>
                <Text style={styles.rightPriceSection}>$512.00</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderBtnTxt}>Order Again</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.finishedCard}>
            <View style={styles.topSection}>
              <View style={styles.leftSection}>
                <View style={styles.iconContainer}>
                  <ShopIcon width={25} height={25} />
                </View>
                <View style={styles.detailsSection}>
                  <Text style={styles.orderText}>Order #185874</Text>
                  <Text style={styles.dateText}>Fri 21 Aug - 10:21 AM</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <View style={styles.userSection}>
                  <Text style={styles.statusTextFinished}>FINISHED</Text>
                  <View style={styles.userContainer}>
                    <Text style={styles.byText}>by</Text>
                    <Text style={styles.userNameTxt}>Amina Ngyuen</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.dashedLine}></View>
            <View style={styles.bottomSection}>
              <View style={styles.bottomLeft}>
                <View style={styles.productListImage}>
                  <Image
                    source={require('../../assets/images/featureimage3.jpg')}
                    style={styles.productImageOne}
                  />
                  <Image
                    source={require('../../assets/images/product1.jpg')}
                    style={styles.productImageTwo}
                  />
                  <Image
                    source={require('../../assets/images/tomato.jpg')}
                    style={styles.productImageThree}
                  />
                  <Text style={styles.productRemainTxt}>+4</Text>
                </View>
              </View>
              <Text style={styles.productTotalTxt}>7 Items</Text>
              <Text style={styles.priceSection}>$512.00</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listText: {
    fontFamily: 'Inter-Bold.ttf',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  activeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#F4F5F7',
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  detailsSection: {},
  orderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Inter-Bold.ttf',
  },
  dateText: {
    fontSize: 13,
    color: '#ADADAD',
  },
  rightSection: {},
  userSection: {},
  statusText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#179c6f',
    fontWeight: 'bold',
  },
  statusTextFinished: {
    textAlign: 'right',
    fontSize: 12,
    color: '#ADADAD',
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
  },
  byText: {marginRight: 5},
  userNameTxt: {
    fontWeight: 'bold',
    color: '#000',
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderStyle: 'dashed',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  bottomLeft: {},
  productListImage: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  productImageOne: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 0,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productImageTwo: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productImageThree: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 25,
    left: 40,
    borderColor: '#fff',
    borderWidth: 2,
  },
  productRemainTxt: {
    position: 'absolute',
    left: 60,
    borderColor: '#fff',
    borderWidth: 2,

    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#2368DF',
    fontSize: 25,
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  productTotalTxt: {
    fontSize: 17,
    color: '#ADADAD',
    marginLeft: 25,
  },
  priceSection: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  finishedCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  bottomSubSection: {
    marginBottom: 10,
  },
  expandedSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    padding: 10,
    borderRadius: 8,
  },
  leftDetailSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPriceSection: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  detailSubSection: {},
  productTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  productBrand: {
    fontSize: 13,
    color: '#ADADAD',
  },
  productImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 2,
    marginRight: 10,
  },
  productTotalTxtExpanded: {
    fontSize: 17,
    color: '#ADADAD',
  },
  orderBtn: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 15,
  },
  orderBtnTxt: {
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
