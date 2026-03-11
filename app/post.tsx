import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
let nomeUsuario: String = "";

const Post = () => {
  return (
    <View>
      <View>
        <Image style={styles.imagemPerfil} source={{ uri: 'https://imgur.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHDJKvc92-WG-HCUZ4sfwsN85bMGC8ctk9A&s/a/GdKSYJL' }}></Image>
        <Text style={styles.nomeUsuario}>{nomeUsuario}</Text>
        <Text>...</Text>
      </View>
      <View>
        <Image style={styles.feedImagem} source={{ uri: 'https://imgur.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHDJKvc92-WG-HCUZ4sfwsN85bMGC8ctk9A&s/a/GdKSYJL' }}></Image>
        <View style={styles.footerLeft}>
          <TouchableOpacity>
            <Text>❤</Text>
            <Text>125k</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>O</Text>
            <Text>89</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>V</Text>
            <Text>45</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerRigth}>
          <TouchableOpacity>
            <Text>Fav</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  imagemPerfil: {
      width:80,
      height:80
  },

  nomeUsuario: {
    
  },

  feedImagem: {

  },

  footerLeft: {

  },

  footerRigth: {

  }
})
