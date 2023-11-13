import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Checkbox, RadioButton, Text} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: 40,
        margin: 12,
        width: 180
    },
    error: {
        position: "relative",
        bottom: -30
    },
    radioText: {
        position: "relative",
        bottom: -9
    }
})

const Form = ({navigation}: any) => {
    const [login, setLogin] = useState("" as string);
    const [password, setPassword] = useState("" as string);
    const [email, setEmail] = useState("" as string);
    const [passwordError, setPasswordError] = useState("" as string);
    const [emailError, setEmailError] = useState("" as string);
    const [sex, setSex] = useState("" as string);
    const [statue, setStatue] = useState(false as boolean);
    const [newsletter, setNewsletter] = useState(false as boolean);

    const validatePassword = (password: string) => {
        if (password.length === 0) setPasswordError("");
        else if (password.length < 6) setPasswordError("Hasło za krótkie!");
        else setPasswordError("Super hasło!");
    }

    const validateEmail = (email: string) => {
        if (email.length === 0) setEmailError("");
        else if (email.includes("@")) setEmailError("Poprawny e-mail");
        else setEmailError("Niepoprawny e-mail!");
    }

    const submit = () => {
        if (
            login.length >= 1 &&
            passwordError === "Super hasło!" &&
            emailError === "Poprawny e-mail" &&
            (sex === "Male" || sex === "Female") &&
            statue
        ) navigation.navigate("Profile", {
            sex: sex,
            login: login,
            password: password,
            newsletter: newsletter,
            email: email
        });
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={"Your login"}
                    onChangeText={(text) => setLogin(text)}
                />
            </View>

            <View style={{flexDirection: "row"}}>
                <TextInput
                    style={styles.input}
                    placeholder={"Your password"}
                    onChangeText={(e) => {
                        setPassword(e);
                        validatePassword(e);
                    }}
                />
                <Text style={styles.error}>{passwordError}</Text>
            </View>

            <View style={{flexDirection: "row"}}>
                <TextInput
                    style={styles.input}
                    placeholder={"Your e-mail"}
                    onChangeText={(e) => {
                        setEmail(e);
                        validateEmail(e);
                    }}
                />
                <Text style={styles.error}>{emailError}</Text>
            </View>

            <Text style={{fontSize: 25, marginTop: 25}}>Set your sex:</Text>

            <RadioButton.Group onValueChange={(value) => setSex(value)} value={sex}>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="Female"/>
                    <Text style={styles.radioText}>Female</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <RadioButton value="Male"/>
                    <Text style={styles.radioText}>Male</Text>
                </View>

            </RadioButton.Group>

            <View style={{marginTop: 40}}>

                <View style={{flexDirection: "row"}}>
                    <Checkbox
                        status={statue ? "checked" : "unchecked"}
                        onPress={() => setStatue(!statue)}/>
                    <Text
                        style={styles.radioText}
                        onPress={() => setStatue(!statue)}>
                        Akceptuję regulamin
                    </Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Checkbox
                        status={newsletter ? "checked" : "unchecked"}
                        onPress={() => setNewsletter(!newsletter)}/>
                    <Text
                        style={styles.radioText}
                        onPress={() => setNewsletter(!newsletter)}>
                        Chcę otrzymywać newsletter
                    </Text>
                </View>

            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "purple",
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    borderRadius: 30,
                    marginTop: 30,
                    marginLeft: 20,
                    alignSelf: "flex-start"
                }}
                onPress={() => submit()}>
                <Text style={{color: "white", fontSize: 20}}>Potwierdź</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Form;