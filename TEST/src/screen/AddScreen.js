import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Dimensions } from "react-native";

const windownWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddScreen =() => {
    return(
        <SafeAreaView style={StyleSheet.container}>
            <View>
                <Text style={StyleSheet.Tittle}>
                    Thêm Bài Viết
                </Text>
            </View>

            <View style={StyleSheet.Input}>
                <Text style={StyleSheet.labelInput}>
                    Tiêu đề bài viết
                </Text>
                    <TextInput style={styles.Input}placeholder='Nhap tieu de'>
                    </TextInput>
            </View>



            <View style={styles.Input}>
                <Text style={styles.labelInput}> Đường link ảnh
                </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.Input}>
                <Text style={styles.labelInput}>Noi dung tom tat</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.Input}>
                <Text style={styles.labelInput}>Noi dung bai viet</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>

            <View style={styles.ButtonArea}>
                <Pressable style={styles.button}>
                    <Text style={styles.LabelButton}>Luu</Text>
                </Pressable>
            </View>

            
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    container:{
        width: windownWidth,
        height: windownWidth,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    Input: {
        width: windownWidth*0.8,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    labelInput: {

    },
    textInput: {
        borderWidth: 2,
        borderColor: 'black',
        height: 50,
    },
    ButtonArea: {
        width: windownWidth*0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 60,
        borderWidth: 2,
        alignItems: 'center',
    }
});

export default AddScreen;