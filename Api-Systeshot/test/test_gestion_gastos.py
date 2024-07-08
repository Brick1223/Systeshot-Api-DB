from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configurar el driver para el navegador (Chrome en este caso)
driver_path = 'C:/Users/user/Documents/selenium/chromedriver.exe'
service = ChromeService(executable_path=driver_path)
print(f"Utilizando ChromeDriver en {driver_path}")

try:
    print("Iniciando el navegador...")
    driver = webdriver.Chrome(service=service)

    # URL de la aplicación web - ajusta la URL para Contabilidad.html
    url = 'http://localhost:3001/Contabilidad.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))  # Espera por un elemento que indique que la página está lista

    # Acceder al formulario de registro de gasto
    print("Accediendo al formulario de registro de gasto...")
    descripcion_input = wait.until(EC.presence_of_element_located((By.ID, 'descripcion')))
    monto_input = driver.find_element(By.ID, 'monto')
    fecha_input = driver.find_element(By.ID, 'fecha')
    registrar_button = driver.find_element(By.XPATH, "//button[text()='Registrar Gasto']")

    descripcion_input.send_keys('Compra de material de oficina')
    monto_input.send_keys('1500')
    fecha_input.send_keys('2023-06-27')

    # Hacer clic en el botón de registrar gasto
    registrar_button.click()

    # Esperar un momento para que los datos se envíen y se procese la solicitud
    time.sleep(5)

    print("Gasto registrado exitosamente. Prueba completada.")

except Exception as e:
    print(f"Se produjo un error durante la prueba: {e}")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
