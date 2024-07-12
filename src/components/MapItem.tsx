import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {SvgXml} from 'react-native-svg';
import maping from '../common/svg';

const arrow =
  '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1719109075106" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="60186" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M446.293333 768a95.146667 95.146667 0 0 1-38.826666-8.533333 75.093333 75.093333 0 0 1-44.8-67.84V332.373333A75.093333 75.093333 0 0 1 407.466667 264.533333a89.6 89.6 0 0 1 94.293333 11.093334l217.6 179.626666a72.533333 72.533333 0 0 1 0 113.493334l-217.6 179.626666a87.893333 87.893333 0 0 1-55.466667 19.626667z" p-id="60187"></path></svg>';

type Props = {
  mapItem: any;
  onPress: (titleItem: any) => {};
};

const MapItem: React.FC<Props> = ({mapItem, onPress}) => {
  const handlePress = () => {
    onPress && onPress(mapItem);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.mapItem}>
        <View style={styles.flex}>
          <SvgXml xml={maping[mapItem.name]} width="30" height="30" />
        </View>
        <View style={styles.flex}>
          <SvgXml xml={arrow} width="30" height="30" />
        </View>
        <View style={styles.flex}>
          <Text style={styles.text}>{mapItem.value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mapItem: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#666',
  },
});

export default MapItem;