import clientPromise from '@/lib/mongodb';

export class User {
  static async create(userData) {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    
    const user = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      lastLogin: null,
      loginAttempts: 0,
      emailVerified: false,
      phoneVerified: false
    };
    
    const result = await db.collection('users').insertOne(user);
    return { ...user, _id: result.insertedId };
  }

  static async findByEmail(email) {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    return await db.collection('users').findOne({ email });
  }

  static async findByPhone(phone) {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    return await db.collection('users').findOne({ phone });
  }

  static async findById(id) {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    return await db.collection('users').findOne({ _id: id });
  }

  static async updateLoginStats(userId) {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    
    return await db.collection('users').updateOne(
      { _id: userId },
      { 
        $set: { 
          lastLogin: new Date(),
          updatedAt: new Date()
        },
        $inc: { loginCount: 1 }
      }
    );
  }
}