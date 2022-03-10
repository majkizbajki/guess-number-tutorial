import React from "react";
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                {/* source={require('../assets/success.png')} */}
                <Image fadeDuration={1000} source={{ uri: 'https://media.istockphoto.com/photos/businessman-at-top-of-mountain-peak-holds-large-flag-picture-id1321329396?b=1&k=20&m=1321329396&s=170667a&w=0&h=uZERXRvljPoIL1VsKha3bUbrY0xoFCila8lpChias5g=' }} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
});

export default GameOverScreen;