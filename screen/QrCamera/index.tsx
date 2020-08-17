import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";

// import { Text } from "react-native-elements";

import { DATA } from "../../data";
import { RootTabParamList } from "../../navigation/Root";

type Props = BottomTabScreenProps<RootTabParamList, "QrCamera">;

type HandleBarCodeScannedProps = {
  type: any;
  data: string;
};

type ProfileType = {
  data: {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
  };
};

export default function MyInfoScreen({ route, navigation }: Props) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isProfileFound, setIsProfileFound] = useState(false);
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  function isJson(item: string): boolean {
    item = typeof item !== "string" ? JSON.stringify(item) : item;

    try {
      item = JSON.parse(item);
    } catch (e) {
      return false;
    }

    if (typeof item === "object" && item !== null) {
      return true;
    }

    return false;
  }

  function validateData(data: string): boolean {
    if (isJson(data)) {
      const jsonData = JSON.parse(data);
      if (
        typeof jsonData.id === "undefined" ||
        typeof jsonData.name === "undefined" ||
        typeof jsonData.name.firstName === "undefined" ||
        typeof jsonData.name.lastName === "undefined"
      )
        return false;
      return true;
    }
    return false;
  }

  const handleBarCodeScanned = ({ type, data }: HandleBarCodeScannedProps) => {
    setScanned(true);
    const isValid = validateData(data);
    const valid = isValid ? "" : "NOT ";
    alert(`Bar code with type ${type} and data ${data} has been scanned! This data is ${valid}a valid user data!
    `);

    if (isValid) {
      setIsProfileFound(true);
      const jsonData = JSON.parse(data);
      setProfile({ data: jsonData });
      DATA.push(jsonData);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />

      {isProfileFound && profile !== null && (
        <Text style={{ color: "white" }}>
          {profile.data.name.firstName} {profile.data.name.lastName} is found.
          Add to Contacts list?
        </Text>
      )}

      {scanned && (
        <Button
          title="Tap to Scan Again"
          onPress={() => {
            setScanned(false);
            setIsProfileFound(false);
            setProfile(null);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1a202c",
    paddingHorizontal: 20,
  },
  scanner: {
    flex: 1,
  },
});
