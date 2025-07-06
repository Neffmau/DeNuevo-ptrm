import face_recognition
import cv2
import numpy as np
import time

# Iniciar la webcam (0 es la cámara por defecto)
video_capture = cv2.VideoCapture(1)

# Verificar que la cámara se abrió correctamente
if not video_capture.isOpened():
    print("❌ Error: No se pudo abrir la cámara")
    exit()

print("🎥 Cámara activada. Presiona 'q' para salir.")
print("📊 Los vectores faciales se mostrarán al cerrar el programa.")
print("-" * 60)

frame_count = 0
last_face_encodings = []

try:
    while True:
        # Leer frame por frame
        ret, frame = video_capture.read()
        
        if not ret:
            print("❌ Error al leer el frame de la cámara")
            break
        
        frame_count += 1
        
        # Procesar solo cada 10 frames para mejor rendimiento
        if frame_count % 10 == 0:
            try:
                # Reducir el tamaño para mejorar velocidad
                small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
                
                # Convertir BGR (OpenCV) a RGB (face_recognition)
                rgb_small_frame = small_frame[:, :, ::-1]
                
                # Detectar rostros
                face_locations = face_recognition.face_locations(rgb_small_frame)
                
                # Solo extraer encodings si hay rostros detectados
                face_encodings = []
                if face_locations:
                    face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)
                
                # Dibujar recuadros en los rostros detectados
                for i, (top, right, bottom, left) in enumerate(face_locations):
                    # Escalar de regreso al tamaño original
                    top *= 4
                    right *= 4
                    bottom *= 4
                    left *= 4
                    
                    # Dibujar rectángulo
                    cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                    
                    # Agregar etiqueta con número de rostro
                    cv2.putText(frame, f'Rostro {i+1}', (left, top-10), 
                                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
                
                # Guardar los últimos encodings para mostrar al cerrar
                if face_encodings:
                    last_face_encodings = face_encodings.copy()
                    
            except Exception as e:
                print(f"⚠️ Error en procesamiento: {e}")
                continue
        
        # Mostrar el frame con detección
        cv2.imshow('🎥 Detección en Vivo - Webcam', frame)
        
        # Salir si presionas 'q'
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            print("\n👋 Saliendo del programa...")
            
            # Mostrar los últimos vectores faciales detectados
            if last_face_encodings:
                print(f"\n🔍 Últimos {len(last_face_encodings)} rostro(s) detectados:")
                for i, encoding in enumerate(last_face_encodings):
                    print(f"📊 Rostro {i+1} - Vector facial (128 dimensiones):")
                    print(f"   Primeros 10 valores: {encoding[:10]}")
                    print(f"   Últimos 10 valores: {encoding[-10:]}")
                    print(f"   Forma del vector: {encoding.shape}")
                    print(f"   Norma del vector: {np.linalg.norm(encoding):.4f}")
                    print("-" * 40)
            else:
                print("\n📭 No se detectaron rostros durante la sesión")
            
            break
            
except KeyboardInterrupt:
    print("\n👋 Programa interrumpido por el usuario")
except Exception as e:
    print(f"\n❌ Error inesperado: {e}")
finally:
    # Liberar la cámara y cerrar ventana
    video_capture.release()
    cv2.destroyAllWindows()
    print("\n✅ Proceso finalizado correctamente.")