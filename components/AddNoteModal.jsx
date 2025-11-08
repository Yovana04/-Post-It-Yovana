import {
    Modal,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'


const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNewNote
}) => {
  return (
    <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={()=> setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Agregar una Nota Nueva
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Teclea una descripción'
              placeholderTextColor={'#aaa'}
              value={newNote}
              onChangeText={setNewNote}
            />
            <View style={styles.modalButtons}>
              {/* Boton Cancelar */}
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={()=>setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              {/* Boton Aceptar */}
              <TouchableOpacity 
                style={styles.saveButton}
                onPress={addNewNote}
              >
                <Text style={styles.saveButtonText}>Agregar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
  )
}

export default AddNoteModal

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems:'center'
    },
    modalContent: {
      backgroundColor: '#1e1e1e',
      padding:20,
      borderRadius: 10,
      width: '80%'
    },
    modalTitle:{
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center',
      fontSize:20,
      color: '#fff'
    },
    input: {
      borderWidth:1,
      borderRadius:8,
      padding:10,
      fontSize:16,
      marginBottom:15,
      borderColor: '#333',
      backgroundColor: '#2a2a2a',
      color: '#fff'
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cancelButton: {
      backgroundColor: '#2a2a2a',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    cancelButtonText: {
      fontSize:16,
      color:'#fff'
    },
     saveButton: {
      backgroundColor: '#1f6feb',
      padding: 10,
      borderRadius:5,
      flex:1,
      marginRight:10,
      alignItems: 'center'
    },
    saveButtonText: {
      fontSize:16,
      color:'#fff'
    },
})