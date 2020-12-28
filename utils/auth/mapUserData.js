export const mapUserData = async (user) => {
  const { uid, email, emailVerified, metadata, providerData } = user
  const token = await user.getIdToken(true)
  return {
    id: uid,
    email,
    emailVerified,
    token,
    metadata,
    providerData
  }
}
