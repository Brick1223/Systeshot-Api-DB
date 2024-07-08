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

    # URL de la página de pedidos - ajusta la URL según tu entorno local
    url = 'http://localhost:3001/Pedidos.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))  # Espera por un elemento que indique que la página está lista

    # Acceder al formulario de registrar pedido
    print("Accediendo al formulario de registrar pedido...")
    fecha_input = wait.until(EC.presence_of_element_located((By.ID, 'fecha')))
    estado_input = driver.find_element(By.ID, 'estado')
    registrar_button = driver.find_element(By.XPATH, "//button[text()='Registrar Pedido']")

    # Llenar el formulario de registrar pedido
    fecha_input.send_keys('2023-07-01')  # Aquí puedes ajustar la fecha según necesites
    estado_input.send_keys('En proceso')  # Aquí puedes ajustar el estado según necesites

    # Hacer clic en el botón de registrar pedido
    registrar_button.click()

    # Esperar un momento para que los datos se envíen y se actualice la página
    time.sleep(5)

    # Puedes agregar aquí alguna acción adicional si necesitas verificar otra parte de la interfaz o realizar otra tarea

    print("Prueba completada exitosamente.")

except Exception as e:
    print(f"Se produjo un error durante la prueba: {e}")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
