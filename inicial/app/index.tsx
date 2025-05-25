import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function HomePage() {

    const onPress = () => {
        router.push("/cards")
    }

    return (
        <SafeAreaView style={styles.wrap}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.wrap}>
                <View style={styles.body}>
                    <Text style={styles.title}>Tela Inicial</Text>
                    <Text style={styles.paragraph}>Meu primeiro app usando react-native e expo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusantium doloribus corrupti asperiores unde illum nostrum dolore ipsam officia deleniti fugit odit vel pariatur veniam necessitatibus est rerum tempore aut.</Text>
                </View>
                <View style={styles.body}>
                    <Image style={styles.img} source={require("../assets/images/react-logo.png")} />
                </View>
                <Text style={styles.center}>CLIQUE NOS BOTOES ABAIXO PARA IR PARA PAGINA DE CARDS</Text>
                <View>
                    <Link style={styles.button} href={"/cards"}>
                        <Text style={styles.btnText}>CARDS</Text>
                    </Link>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.btnText}>CARDS</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: "#090909",
    },
    body: {
        backgroundColor: "#090909",
        gap: 25,
        paddingBottom: 50,
    },
    title: {
        color: "#19adc7",
        textAlign: "center",
        fontSize: 36,
        fontWeight: 700,
        backgroundColor: "#ffffff",
        padding: 20
    },
    paragraph: {
        color: "#ffffff",
        paddingHorizontal: 50,
    },
    center: {
        color: "#06525f",
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        padding: 35,
        backgroundColor: "#ffffff",
        paddingHorizontal: 50,
        marginBottom: 30
    },
    img: {
        alignSelf: "center"
    },
    button: {
        backgroundColor: "#06525f",
        width: 200,
        height: 60,
        shadowColor: "#84dcf1",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 15.00,
        elevation: 5,
        margin: 20,
        alignSelf: "center",
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#ffffff",
    },
    btnText: {
        color: "#ffffff",
        fontWeight: "bold"
    }
});
