import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

const now = new Date();
console.log(now.toLocaleTimeString());

const HeadlineScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Title}>Tiêu đề bài viết</Text>
            </View>

            <View style = {styles.time}>
                <Text>{now.toLocaleDateString() + '  ' + now.toLocaleTimeString()}</Text>
            </View>

            <View style={styles.Input}>
                <Text style={styles.labelInput}>content</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: windownWidth,
        height: windownHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    time: {
        with : windownWidth*0.8,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    Input: {
        width: windownWidth*0.8,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    labelInput: {

    }
});

export default HeadlineScreen;
Write to Minh Bùi
