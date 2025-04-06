const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const { validationResult } = require('express-validator');

// Función para crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  const { usuario, nombre, email, telefono, contraseña, rol } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = await Usuario.create({
      usuario,
      nombre,
      email,
      telefono,
      contraseña: hashedPassword,
      rol,
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear usuario', error });
  }
};

// Función para editar un usuario existente
exports.editarUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  const { id } = req.params;
  const { nombre, email, telefono, contraseña, rol } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    if (contraseña) {
      const salt = await bcrypt.genSalt(10);
      usuario.contraseña = await bcrypt.hash(contraseña, salt);
    }
    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;
    usuario.telefono = telefono || usuario.telefono;
    usuario.rol = rol || usuario.rol;

    await usuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ msg: 'Error al editar usuario', error });
  }
};

// Función para eliminar (cambiar estado a inactivo) un usuario
exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    usuario.estado = 'inactivo';
    await usuario.save();
    res.status(200).json({ msg: 'Usuario eliminado (estado inactivo)' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar usuario', error });
  }
};

// Función para buscar todos los usuarios
exports.buscarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ msg: 'Error al buscar usuarios', error });
  }
};

// Función para buscar un usuario por su ID
exports.buscarUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ msg: 'Error al buscar usuario', error });
  }
};

// Función para autenticar a un usuario y generar un token JWT
exports.loginUsuario = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const esContraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!esContraseñaValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ msg: 'Error al iniciar sesión', error });
  }
};

// Función para invalidar el token JWT del usuario (logout)
exports.logoutUsuario = (req, res) => {
  res.status(200).json({ msg: 'Sesión cerrada correctamente' });
};

// Función para obtener la información del usuario conectado
exports.obtenerUsuarioConectado = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, { attributes: { exclude: ['contraseña'] } });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener usuario conectado', error });
  }
};