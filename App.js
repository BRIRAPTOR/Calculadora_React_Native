import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {all, create} from 'mathjs';

const math = create(all);

export default function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonPress = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            setResult(math.evaluate(input).toString());
        } catch (e) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const handleSquare = () => {
        setInput(input + '^2');
    };

    const handleSquareRoot = () => {
        setInput(input + 'sqrt()');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Ingresa la expresión"
            />
            <Text style={styles.result}>{result}</Text>
            <View style={styles.buttonContainer}>
                <Button title="sin" onPress={() => handleButtonPress('sin(')}/>
                <Button title="cos" onPress={() => handleButtonPress('cos(')}/>
                <Button title="tan" onPress={() => handleButtonPress('tan(')}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="√" onPress={handleSquareRoot}/>
                <Button title="x²" onPress={handleSquare}/>
                <Button title="π" onPress={() => handleButtonPress(math.pi.toString())}/>
                <Button title="e" onPress={() => handleButtonPress(math.e.toString())}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="1" onPress={() => handleButtonPress('1')}/>
                <Button title="2" onPress={() => handleButtonPress('2')}/>
                <Button title="3" onPress={() => handleButtonPress('3')}/>
                <Button title="+" onPress={() => handleButtonPress('+')}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="4" onPress={() => handleButtonPress('4')}/>
                <Button title="5" onPress={() => handleButtonPress('5')}/>
                <Button title="6" onPress={() => handleButtonPress('6')}/>
                <Button title="-" onPress={() => handleButtonPress('-')}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="7" onPress={() => handleButtonPress('7')}/>
                <Button title="8" onPress={() => handleButtonPress('8')}/>
                <Button title="9" onPress={() => handleButtonPress('9')}/>
                <Button title="*" onPress={() => handleButtonPress('*')}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="C" onPress={clearInput}/>
                <Button title="0" onPress={() => handleButtonPress('0')}/>
                <Button title="=" onPress={calculateResult}/>
                <Button title="/" onPress={() => handleButtonPress('/')}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#f8f9fa',
    },
    input: {
        height: 50,
        borderColor: '#0da5bb',
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 15,
        fontSize: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    result: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#343a40',
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 20,
        flexBasis: 30,
        flexWrap: 'wrap',
        columnGap: 5
    },
});
