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

    # URL de la aplicación web
    url = 'http://localhost:3001/GestionProduccion.html'
    print(f"Navegando a {url}...")
    driver.get(url)

    # Esperar hasta que la página esté completamente cargada
    print("Esperando a que la página esté completamente cargada...")
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'h1')))  # Espera por un elemento que indique que la página está lista

    # Ingresar datos en los campos de cantidad producida
    print("Ingresando datos en los campos de cantidad producida...")
    cantidad1_input = driver.find_element(By.NAME, 'cantidad_producida')
    cantidad1_input.clear()
    cantidad1_input.send_keys('150,000 unidades')

    cantidad2_input = driver.find_element(By.NAME, 'cantidad_producida2')
    cantidad2_input.clear()
    cantidad2_input.send_keys('15,000 unidades')

    cantidad3_input = driver.find_element(By.NAME, 'cantidad_producida3')
    cantidad3_input.clear()
    cantidad3_input.send_keys('250,000 unidades')

    # Ingresar datos en los campos de productos producidos
    print("Ingresando datos en los campos de productos producidos...")
    producto1_input = driver.find_element(By.NAME, 'producto1')
    producto1_input.clear()
    producto1_input.send_keys('Nuevo Producto A')

    producto2_input = driver.find_element(By.NAME, 'producto2')
    producto2_input.clear()
    producto2_input.send_keys('Nuevo Producto B')

    producto3_input = driver.find_element(By.NAME, 'producto3')
    producto3_input.clear()
    producto3_input.send_keys('Nuevo Producto C')

    # Ingresar datos en los campos de descripción de producción
    print("Ingresando datos en los campos de descripción de producción...")
    desc1_input = driver.find_element(By.NAME, 'descripcion_produccion')
    desc1_input.clear()
    desc1_input.send_keys('Descripción detallada del proceso de producción del Nuevo Producto A.')

    desc2_input = driver.find_element(By.NAME, 'descripcion_produccion2')
    desc2_input.clear()
    desc2_input.send_keys('Descripción detallada del proceso de producción del Nuevo Producto B.')

    desc3_input = driver.find_element(By.NAME, 'descripcion_produccion3')
    desc3_input.clear()
    desc3_input.send_keys('Descripción detallada del proceso de producción del Nuevo Producto C.')

    # Enviar el formulario
    print("Enviando el formulario de producción...")
    submit_button = driver.find_element(By.XPATH, "//input[@type='submit']")
    submit_button.click()

    # Esperar un momento para que se procese la acción
    time.sleep(5)

    # Verificar que la página se ha actualizado correctamente (puedes añadir más validaciones si es necesario)
    current_url = driver.current_url
    assert current_url == 'http://localhost:3001/GestionProduccion.html', f"Error: Se esperaba permanecer en 'GestionProduccion.html' pero se encuentra en '{current_url}'"

    print("Prueba de gestión de producción completada exitosamente.")

except Exception as e:
    print(f"Se produjo un error durante la prueba: {e}")

finally:
    print("Cerrando el navegador...")
    driver.quit()
    print("Navegador cerrado.")
