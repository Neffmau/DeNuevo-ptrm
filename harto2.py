import face_recognition
import cv2
import numpy as np
import os

# 📂 Cargar imagen base
ruta_imagen = os.path.join(os.path.dirname(os.path.abspath(__file__)), "neff.jpg")
if not os.path.exists(ruta_imagen):
    print(f"❌ No se encontró la imagen: {ruta_imagen}")
    exit()

imagen_neff = face_recognition.load_image_file(ruta_imagen)
encodings = face_recognition.face_encodings(imagen_neff)

if len(encodings) == 0:
    print("❌ No se detectó ningún rostro en neff.jpg. Usa una imagen clara y frontal.")
    exit()

encoding_neff = encodings[0]
print("✅ Encoding de Neff generado correctamente.")

# 🧠 Base de datos de rostros conocidos
known_encodings = [encoding_neff]
known_names = ["Neff"]

# 🎥 Iniciar cámara
video_capture = cv2.VideoCapture(0)
if not video_capture.isOpened():
    print("❌ No se pudo abrir la cámara")
    exit()

print("🎥 Cámara activada. Presiona 'q' para salir.")
print("-" * 60)

frame_count = 0

try:
    while True:
        ret, frame = video_capture.read()
        if not ret:
            print("❌ Error al leer frame")
            break

        frame_count += 1

        # Procesar cada 10 frames
        if frame_count % 10 == 0:
            try:
                small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
                rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

                face_locations = face_recognition.face_locations(rgb_small_frame)
                
                if len(face_locations) == 0:
                    continue
                
                face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

                print(f"👀 Rostros detectados en frame: {len(face_locations)}")
            except Exception as e:
                print(f"⚠️ Error procesando frame: {e}")
                continue

            for face_encoding, (top, right, bottom, left) in zip(face_encodings, face_locations):
                try:
                    matches = face_recognition.compare_faces(known_encodings, face_encoding, tolerance=0.6)
                    distances = face_recognition.face_distance(known_encodings, face_encoding)

                    best_match_index = np.argmin(distances)
                    distancia = distances[best_match_index]

                    if matches[best_match_index]:
                        name = f"{known_names[best_match_index]}"
                        print(f"✅ Rostro reconocido: {name} - distancia {distancia:.4f}")
                    else:
                        name = "No registrado"
                        print(f"❌ Rostro no registrado - distancia {distancia:.4f}")

                    # Escalar coordenadas correctamente (por 4 porque fx=0.25)
                    top *= 4
                    right *= 4
                    bottom *= 4
                    left *= 4

                    # Dibujar recuadro y nombre
                    color = (0, 255, 0) if matches[best_match_index] else (0, 0, 255)
                    cv2.rectangle(frame, (left, top), (right, bottom), color, 3)
                    cv2.putText(frame, f"{name} ({distancia:.2f})", (left, top - 10),
                                cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)
                except Exception as e:
                    print(f"⚠️ Error procesando rostro: {e}")
                    continue

        # ✅ Mostrar frame con recuadros y nombres
        cv2.imshow('🎥 Comparación en Vivo', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            print("\n👋 Saliendo del programa...")
            break

except KeyboardInterrupt:
    print("\n👋 Programa interrumpido por el usuario")
except Exception as e:
    print(f"\n❌ Error inesperado: {e}")
finally:
    video_capture.release()
    cv2.destroyAllWindows()
    print("\n✅ Proceso finalizado correctamente.")
