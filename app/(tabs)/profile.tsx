import { View, Text, Button } from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";

export default function Profile() {

  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:20 }}>
        Perfil do Usuário
      </Text>

      <Text style={{ marginTop:10, color:'red'}}>
        Nome: {user?.name}
      </Text>

      <Text>
        Email: {user?.email}
      </Text>

      <View style={{ marginTop:20 }}>
        <Button title="Logout" onPress={handleLogout}/>
      </View>

    </View>
  );
}