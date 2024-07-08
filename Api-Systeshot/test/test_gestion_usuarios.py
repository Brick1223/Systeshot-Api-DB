from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configuración del driver para el navegador Chrome
driver_path = 'C:/Users/user/Documents/selenium/chromedriver.exe'
service = ChromeService(executable_path=driver_path)
print(f"Utilizando ChromeDriver en {driver_path}")

try:
    print("Iniciando el navegador...")
    driver = webdriver.Chrome(service=service)

    # URL de la página de usuarios - ajusta la URL según tu entorno local
    url = 'http://localhost:3001/Usuarios.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))  # Espera por un elemento que indique que la página está lista

    # Acceder al formulario de actualizar usuario
    print("Accediendo al formulario de actualizar usuario...")
    userId_input = wait.until(EC.presence_of_element_located((By.ID, 'userId')))
    newUsername_input = driver.find_element(By.ID, 'newUsername')
    newPassword_input = driver.find_element(By.ID, 'newPassword')
    actualizar_button = driver.find_element(By.XPATH, "//input[@type='submit' and @value='Actualizar']")

    # Simular la actualización de usuario
    userId_input.send_keys('1')  # Aquí ajusta el ID del usuario que quieres actualizar
    newUsername_input.send_keys('nuevo_usuario')  # Nuevo nombre de usuario
    newPassword_input.send_keys('nueva_contraseña')  # Nueva contraseña

    # Hacer clic en el botón de actualizar usuario
    actualizar_button.click()

    # Esperar un momento para que los datos se envíen y se actualice la página
    time.sleep(5)

    print("Prueba de actualización de usuario completada exitosamente.")

except Exception as e:
    print(f"Se produjo un error durante la prueba: {e}")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
